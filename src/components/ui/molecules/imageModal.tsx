import { useState } from "react";
import { LoaderIcon } from "react-hot-toast";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../atoms/dialog";
import { Loader } from "../atoms/loader";

type ImageModalProps = {
  src: string;
  alt: string;
};

const ImageModal = ({ src, alt }: ImageModalProps) => {
  const [loading, setLoading] = useState(false);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <img
          src={src}
          alt={alt}
          className="h-12 w-12 rounded-full cursor-pointer"
        />
      </DialogTrigger>
      <DialogContent
        className="flex items-center justify-center"
        showCloseButton={false}
      >
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        <Loader
          loading={loading}
          fallback={<LoaderIcon className="animate-spin" />}
        >
          <img
            src={src}
            alt={alt}
            onLoad={() => setLoading(false)}
            onError={() => setLoading(false)}
            className="max-w-full max-h-[80vh] object-contain"
          />
        </Loader>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
