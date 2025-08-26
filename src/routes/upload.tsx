import { FileUploaderRegular } from '@uploadcare/react-uploader';
import '@uploadcare/react-uploader/core.css';

export function Upload() {
  return (
    <div>
      <h1>Upload</h1>
      <FileUploaderRegular
        pubkey="2b7f257e8ea0817ba746"
        onFileUploadSuccess={(event) => {
          console.log({ event });
        }}
      />
    </div>
  );
}
