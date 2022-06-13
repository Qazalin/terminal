import Image from "next/image"
import styles from "styles/Components.module.css"

type ProjectType = {
    title: string
    img: string
    link: string
    desc: string
}

const projects: ProjectType[] = [
    {
        title: "Ethereum real-time gas tracker",
        desc: "With this website, you can monitor the Ethereum gas price, estimated confirmation time and even get suggestions for your base fee and get the network traffic. This website uses the etherscan API to provide these features. My goal was to visualize these numbers in an easy-to-consume layout and provide a fast updating cycle for the website",
        img: "/ethGasTracker.png",
        link: "https://eth-gastracker.vercel.app/",
    },
    {
        title: "Braintrust Dashboard",
        desc: "A dashboard for analyzing the Braintrust network stats. The analysis was first done with Python. In this React app, the data is charted using the Recharts pacakge",
        img: "/btrust.png",
        link: "https://braintrust-analytics.vercel.app/",
    },
]
export const Projects = () => {
    return (
        <div className={styles.projectsWrapper}>
            {projects.map((p, i) => (
                <ProjectCard {...p} key={`project-${i}`} />
            ))}
        </div>
    )
}

const ProjectCard: React.FC<ProjectType> = ({ title, img, link, desc }) => {
    return (
        <div className={styles.projectCard}>
            <Image
                alt={title}
                src={img}
                width={300}
                height={200}
                style={{ borderRadius: "20px", objectFit: "cover" }}
            />
            <b
                style={{
                    fontSize: "1.2rem",
                    textAlign: "center",
                    marginTop: "10px",
                }}
            >
                {title}
            </b>
            <p>{desc}</p>
            <a target="blank" href={link}>
                live view
            </a>
        </div>
    )
}
