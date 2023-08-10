export function middleWarePipeline(context, middleware, index){
     const nextMiddleWare = middleware[index];

     if(!nextMiddleWare){
        return context.next;
     }

     return ()=>{
        const nextPipeline = middleWarePipeline(
            context, middleware, index + 1
        )

        nextMiddleWare({...context, next: nextPipeline })
     }
}