import { Metadata, NextPage } from "next";

interface IProps {
  params: { id: string };
}

export const generateMetadata = ({ params }: IProps): Metadata => {
  return { title: `Blog || ${params.id} || Hablu Programmer` };
};

const BlogPage: NextPage<IProps> = ({ params }) => {
  console.log("🚀 ~ BlogPage ~ props:", { id: params.id });

  return (
    <main className="flex justify-center items-center w-full h-screen">
      <h1 className="text-5xl font-bold text-green-500 ">
        Blog Id:- {params.id}
      </h1>
    </main>
  );
};

export default BlogPage;