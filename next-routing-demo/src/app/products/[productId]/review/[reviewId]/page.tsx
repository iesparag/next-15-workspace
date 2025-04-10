export default async function DynamicReviewComponent({params}:{
                params:Promise<{productId:string,reviewId:string}>
}){
                const {productId,reviewId} =await params;
                return (
 <h1>this is a review {reviewId} from a product {productId}</h1>
                )
}