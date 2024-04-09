 import client from "@sanity/client"

 export default client({
    projectId: "dktsl6v1",
    dataset: "production",
    useCdn: true,
    apiVersion: "2024-04-07"
 })