"use client";
import Image from "next/image";
import { ActionIcon } from "@/components/ui/action-icon";
import PencilIcon from "@/components/icons/pencil";
import UploadFileButton from "@/components/upload-file-button";
import { type FileSchema } from "@/lib/zod-schemas/attachment";

interface Props {
  className?: string;
  bannerImage?: FileSchema | string;

  onChangeBannerImage?: (file?: FileSchema) => void;
}
const BannerForm = ({
  bannerImage,

  onChangeBannerImage,
}: Props) => {
  return (
    <div
      className={"relative rounded-t-2xl p-4"}
      style={{
        backgroundImage: `url(${
          typeof bannerImage === "string"
            ? bannerImage
            : bannerImage?.nativeURL ??
              "https://placehold.co/800x200/627f7f/ffff"
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "300px",
      }}
    >
      <div className="absolute inset-0 w-full overflow-hidden rounded-t-2xl bg-black bg-opacity-30"></div>

      <div className="absolute right-5 top-5">
        <UploadFileButton
          inputProps={{
            accept: "image/*",
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onChange: async (event) => {
              const file = event.currentTarget.files?.[0];
              if (!file) {
                onChangeBannerImage?.(undefined);
                return;
              }
              onChangeBannerImage?.({
                nativeFile: file,
                nativeURL: URL.createObjectURL(file),
                status: "idle",
                id: "0",
              });
            },
          }}
          buttonComponent={
            <ActionIcon size="sm" color="secondary">
              <PencilIcon className="h-4 w-4" />
            </ActionIcon>
          }
        />
      </div>
    </div>
  );
};

export default BannerForm;
