import React from 'react'

interface IProps{
  params: {slug:string[]};
}

const DocumentPage = ({params}: IProps ) => {
  console.log(" ~  DocumentPage ~ params:", params.slug);

  if(params.slug?.length === 1){
    return <div>Document feature id:{params.slug[0]}</div>;
  }

  if(params.slug?.length === 2){
    return <div>Document concepts id:{params.slug[1]}</div>;
  }

  if(params.slug?.length === 3){
    return <div>Document example id:{params.slug[2]}</div>;
  }
  return (
    <div>DocumentPage</div>
  )
}

export default DocumentPage;