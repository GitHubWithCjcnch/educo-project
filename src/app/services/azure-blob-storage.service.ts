import { Injectable } from '@angular/core';
import { BlobServiceClient, ContainerClient } from '@azure/storage-blob'

@Injectable({
  providedIn: 'root'
})
export class AzureBlobStorageService {
  accountName = "educo"
  containerName = "images"
  constructor() { }
  
  private containerClient(sas?: string): ContainerClient {
    let token = "";
    if (sas) {
      token = sas;
    }

    return new BlobServiceClient(`https://${this.accountName}.blob.core.windows.net?${token}`)
        .getContainerClient(this.containerName);
  }

  public async listImages(): Promise<string[]> {
    let result: string[] = []
    let blobs = this.containerClient().listBlobsFlat();
    for await (const blob of blobs) {
      result.push(blob.name)
    }
    return result
  }

  public downloadImage(name: string, handler: (blob: Blob) => void) {
    const blobClient = this.containerClient().getBlobClient(name);
    blobClient.download().then(res => {
      res.blobBody?.then(blob => {
        handler(blob)
      })
    })
  }

  public uploadImage(sas: string, content: Blob, name: string) {
    const blockBlobClient = this.containerClient(sas).getBlockBlobClient(name);
    blockBlobClient
      .uploadData(content, { blobHTTPHeaders: { blobContentType: content.type } })
  }
  
}
