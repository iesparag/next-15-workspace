export default async function DynamicProductPage({params}:{params: Promise<{productId:string}>}){
                const {productId} = await params;
                return (
                                <h1>product Id is {productId}</h1>
                )

}