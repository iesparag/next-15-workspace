export default async function DocsAllCatch({params}:{
                params:Promise<{slug: string[]}>
}){
                const {slug} = await params;
                console.log(slug,"12334455")
                return <h1>This is a /docs/catch all page</h1>
} 