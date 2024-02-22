import { z } from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "application/pdf",
];
export type FileSchema = {
  id: number | string;
  nativeFile: File;
  nativeURL: string;
  status: "uploading" | "error" | "uploaded" | "idle";
  uploadedURL?: string;
};
const FileSchemaZod = z.object({
  id: z.union([z.string(), z.number()]),
  nativeFile: z.instanceof(File),
  nativeURL: z.string(),
  status: z.enum(["uploading", "error", "uploaded", "idle"]),
  uploadedURL: z.string().optional(),
});
const FileSchemaValidations = z
  // Remember this isn't a chain validation. It's a chain of refinement
  .custom<FileSchema>((v) => v, "Attachment is required")
  .refine(
    (file: FileSchema) =>
      file && ACCEPTED_IMAGE_TYPES.includes(file.nativeFile.type),
    ".jpg, .jpeg, .png, .pdf and .webp files are accepted.",
  )
  .refine(
    (file: FileSchema) => file.nativeFile.size <= MAX_FILE_SIZE,
    `Max file size is 5MB.`,
  );
const BackendAttachmentSchema = z.string().url();

const AttachmentSchema = z
  .custom<
    | z.infer<typeof FileSchemaValidations>
    | z.infer<typeof BackendAttachmentSchema>
  >()
  .superRefine((val, ctx) => {
    const parsedFileSchema = FileSchemaZod.safeParse(val);
    if (parsedFileSchema.success) {
      // If it's a file schema, we check for file schema validations
      const parsedFront = FileSchemaValidations.safeParse(val);
      if (!parsedFront.success) {
        return parsedFront.error.issues.map((issue) => {
          ctx.addIssue(issue);
        });
      }
    } else {
      // Check if it's a backend attachment
      // Most likely this won't fail as, these are not interacted by user
      const parsedBackend = BackendAttachmentSchema.safeParse(val);
      if (!parsedBackend.success) {
        return parsedBackend.error.issues.map((issue) => {
          ctx.addIssue(issue);
        });
      }
    }
  });
export default AttachmentSchema;
