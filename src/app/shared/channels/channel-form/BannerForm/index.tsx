"use client";
import Image from "next/image";
import { ActionIcon } from "@/components/ui/action-icon";
import PencilIcon from "@/components/icons/pencil";
import UploadFileButton from "@/components/upload-file-button";
import { type FileSchema } from "@/lib/zod-schemas/attachment";

interface Props {
  className?: string;
  bannerImage?: FileSchema | string;
  image?: FileSchema | string;
  onChangeBannerImage?: (file?: FileSchema) => void;
  onChangeImage?: (file?: FileSchema) => void;
}
const BannerForm = ({
  bannerImage,
  image,
  onChangeBannerImage,
  onChangeImage,
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
        height: "200px",
      }}
    >
      <div className="absolute inset-0 w-full overflow-hidden rounded-t-2xl bg-black bg-opacity-30"></div>
      <div className="absolute bottom-5 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full">
        <Image
          {...(image
            ? { src: typeof image === "string" ? image : image.nativeURL }
            : {
                loader: ({ src }) => `https://placehold.co/${src}`,
                src: "112x112/ffff/627f7f?text=Profile",
              })}
          alt="profile_picture"
          layout={"fill"}
        />
        <div className="absolute">
          <UploadFileButton
            inputProps={{
              accept: "image/*",
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onChange: async (event) => {
                const file = event.currentTarget.files?.[0];
                if (!file) {
                  onChangeImage?.(undefined);
                  return;            
                }
                onChangeImage?.({
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
