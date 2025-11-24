export default function Timeline({ items }) {
return (
<div className="timeline">
{items.map((item) => (
<div key={item.id} className="timeline-item">
<div className="timeline-date">{item.year}</div>
<div className="timeline-content">
<h3>{item.role}</h3>
<p>{item.company}</p>
</div>
</div>
))}
</div>
);
}