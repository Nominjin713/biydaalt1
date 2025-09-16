interface CommentsProps {
  params: {
    id: string;
  };
}

export default function CommentsPage({ params }: CommentsProps) {
  return (
    <div>
      <h2>Comments for Blog #{params.id}</h2>
      <ul>
        <li>User1: Nice article!</li>
        <li>User2: I learned a lot.</li>
        <li>User3: Thanks for sharing!</li>
      </ul>
    </div>
  );
}
