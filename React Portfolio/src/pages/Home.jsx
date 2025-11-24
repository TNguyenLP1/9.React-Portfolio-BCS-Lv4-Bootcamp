import profile from "../assets/profile.jpg";


export default function Home() {
return (
<section className="home">
<div className="home-content">
<h1>Professional Portfolio</h1>
<p>Summary based on CV and LinkedIn.</p>
<h2>Education</h2>
<ul>
<li>BCS Level 4 Certificate in Software Development (Step8Up)</li>
<li>UT Austin – PG Program in AI & ML</li>
<li>Monash University – Data Science: Data-Driven Decision Making</li>
</ul>
</div>
<img src={profile} alt="Profile" className="profile-pic" />
</section>
);
}