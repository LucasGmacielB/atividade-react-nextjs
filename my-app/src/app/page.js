import Profile from "@/components/Profile";

export default function Home() {
  return (
      <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '200px', marginTop: '20px'}}>
        <h1>Site criado para a disciplina Programação Front-End</h1>
        <Profile/>
      </div>
  );
}
