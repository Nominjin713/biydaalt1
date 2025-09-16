interface Props {
  params: { id: string };
}

export default function BlogPost({ params }: Props) {
  return (
    <div>
      <h1>Blog Post {params.id}</h1>
      <p>This is the content for post {params.id}.</p>
    </div>
  );
}
