import { Card} from "./components/ui/card"
const today= new Date()
const ExperiencesArray=[
    "Architected and deployed full-stack web applications using React, Node.js, Express, and MongoDB, with a focus on scalability and maintainability",
        "Designed and implemented type-safe APIs using TypeScript and schema validation (Zod), reducing runtime errors and improving developer experience",
        "Built AI-powered features including intelligent summarization, quiz generation, and a Socratic-style tutoring system",
        "Developed responsive, high-performance UIs using Tailwind CSS, optimizing for accessibility and cross-device compatibility",
        "Implemented authentication & security best practices (JWT, protected routes, input validation)",
        "Managed full product lifecycle: idea → system design → development → deployment → iteration",
        "Optimized application performance through efficient state management, API design, and database queries",
        "Deployed and maintained applications on modern platforms (e.g., Vercel, Render), ensuring uptime and reliability"
]
function Experiences(){
    return(
    <Card className="p-4 h-[430px] overflow-y-auto">
        <p className="flex items-center w-fit bg-[#EEEEF1] rounded-lg px-2 gap-1 text-slate-600"><svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.15698 3.98246C4.70477 3.44138 4.47867 3.17085 4.21875 3.21252C3.95884 3.25419 3.83724 3.58047 3.59405 4.23302L3.53114 4.40185C3.46203 4.58729 3.42747 4.68 3.36024 4.7483C3.29301 4.8166 3.20072 4.85275 3.01612 4.92505L2.84807 4.99087C2.19847 5.24529 1.87368 5.3725 1.83664 5.63251C1.79959 5.89252 2.07484 6.11314 2.62532 6.55437L2.76774 6.66852C2.92417 6.79391 3.00238 6.8566 3.04766 6.94241C3.09293 7.02822 3.10014 7.12744 3.11456 7.32588L3.12769 7.50654C3.17842 8.20486 3.20379 8.55401 3.44081 8.67304C3.67784 8.79207 3.96954 8.60213 4.55295 8.22227L4.70388 8.124C4.86967 8.01605 4.95256 7.96208 5.04777 7.94682C5.14299 7.93155 5.23974 7.95672 5.43324 8.00707L5.60941 8.0529C6.29036 8.23006 6.63084 8.31864 6.81437 8.13219C6.9979 7.94574 6.90294 7.60774 6.71302 6.93175L6.66388 6.75686C6.60992 6.56476 6.58293 6.46871 6.5965 6.37346C6.61007 6.27822 6.66266 6.19455 6.76783 6.02723L6.86358 5.87489C7.2337 5.28607 7.41875 4.99166 7.29516 4.7574C7.17156 4.52315 6.82117 4.50418 6.12039 4.46625L5.93909 4.45644C5.73994 4.44566 5.64037 4.44027 5.55355 4.39667C5.46672 4.35307 5.40247 4.27619 5.27397 4.12244L5.15698 3.98246Z" fill="#71717A"/>
        <path d="M4.98571 1.45165L5.0696 1.69081C5.16174 1.95351 5.20781 2.08487 5.29745 2.18162C5.38709 2.27838 5.51015 2.32959 5.75627 2.43201L5.98036 2.52526C6.84648 2.88569 7.27954 3.06591 7.32893 3.43425C7.34949 3.58758 7.2979 3.73124 7.17773 3.89179C7.13711 3.8808 7.09802 3.87184 7.06126 3.86437C6.82011 3.81534 6.51338 3.79881 6.20076 3.78197L5.9763 3.76982C5.93313 3.76749 5.89957 3.76566 5.87081 3.7638C5.85177 3.7415 5.82983 3.71527 5.80155 3.68143L5.65689 3.50834C5.45505 3.26672 5.25757 3.03031 5.07392 2.8662C4.87807 2.69118 4.55068 2.46291 4.10998 2.53356C3.66459 2.60497 3.42701 2.92904 3.29884 3.16034C3.18009 3.37464 3.07329 3.66145 2.96516 3.95183L2.88697 4.16164C2.87377 4.19709 2.86317 4.22549 2.85384 4.24992C2.8294 4.25972 2.80097 4.27087 2.76546 4.28478L2.5567 4.36653C2.26754 4.4797 1.98226 4.59135 1.76983 4.71358C1.54124 4.8451 1.21981 5.08803 1.15607 5.53542C1.09293 5.97856 1.32894 6.30206 1.50759 6.49389C1.64074 6.63687 1.81963 6.78769 2.01064 6.94226C1.29171 7.13731 0.909296 7.21006 0.691956 6.97547C0.447249 6.71133 0.573862 6.2325 0.827087 5.27483L0.892599 5.02707C0.964558 4.75494 1.00054 4.61887 0.982445 4.48393C0.964352 4.349 0.894236 4.23048 0.754003 3.99344L0.626333 3.77763C0.13285 2.94346 -0.113892 2.52638 0.0509005 2.19452C0.215693 1.86265 0.682882 1.83579 1.61726 1.78205L1.859 1.76815C2.12452 1.75289 2.25728 1.74525 2.37305 1.68348C2.48881 1.62171 2.57448 1.5128 2.74582 1.29498L2.90181 1.09667C3.50475 0.330155 3.80622 -0.0531051 4.15278 0.00592684C4.49933 0.0649588 4.66146 0.527187 4.98571 1.45165Z" fill="#71717A"/>
        </svg>
        Reviews</p>
        <h1 className="text-slate-950 text-lg">Here are some of my professional experiences upto {`${today.getDate()}/${today.getUTCMonth() + 1}/${today.getFullYear()}`}</h1>
        <div className="overflow-y-auto flex flex-col gap-2">
        {ExperiencesArray.map((exp, index) => (
            <Card key={index} className="border-none border-transparent bg-gray-100 text-gray-800 p-2 min-h-fit">
                <p>{exp}</p>
            </Card>
        ))}
        </div>
    </Card>)
}
function CV(){
    return(
        <Card className="p-3 h-[430px] overflow-y-auto">
            <div className="flex justify-between px-4 items-center gap-2  ">
                <p className="flex items-center bg-[#EEEEF1] rounded-2xl px-3 gap-1 text-slate-600 text-lg w-fit"><svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.59187 1.02081C2.39356 1.07263 2.26583 1.14589 2.16654 1.24316C2.02657 1.3803 1.93531 1.57283 1.88542 1.93642C1.83406 2.31069 1.83325 2.80673 1.83325 3.51798V7.44524C2.01139 7.32326 2.21217 7.23045 2.42862 7.17363C2.48086 7.15992 2.53497 7.14917 2.59187 7.14074V1.02081Z" fill="#71717A"/>
                <path d="M3.35049 7.1103C3.35586 7.1103 3.36125 7.11031 3.36667 7.11031L9.16658 7.11032V3.51798C9.16658 2.80673 9.16578 2.31069 9.11442 1.93642C9.06452 1.57283 8.97326 1.3803 8.83329 1.24316C8.69332 1.10603 8.4968 1.01662 8.1257 0.967735C7.74368 0.917415 7.23737 0.916626 6.51141 0.916626H4.48842C4.0293 0.916626 3.65803 0.916942 3.35049 0.929903V7.1103Z" fill="#71717A"/>
                <path d="M3.98273 7.85356H3.42528C2.93053 7.85356 2.75756 7.85675 2.62502 7.89155C2.26122 7.98705 1.97121 8.25199 1.84683 8.59636C1.85452 8.77165 1.86657 8.92582 1.88547 9.0635C1.93536 9.42708 2.02662 9.61962 2.16659 9.75676C2.30657 9.89389 2.50309 9.9833 2.87419 10.0322C3.25621 10.0825 3.76252 10.0833 4.48847 10.0833H6.51146C7.23742 10.0833 7.74373 10.0825 8.12575 10.0322C8.49685 9.9833 8.69337 9.89389 8.83334 9.75676C8.97331 9.61962 9.06457 9.42708 9.11447 9.0635C9.15637 8.75815 9.16462 8.37175 9.16624 7.85356H6.00572V9.23159C6.00572 9.36814 6.00572 9.43641 5.95774 9.46401C5.90977 9.4916 5.84416 9.46107 5.71295 9.40001L5.08469 9.10763C5.0403 9.08697 5.0181 9.07664 4.99422 9.07664C4.97034 9.07664 4.94815 9.08697 4.90375 9.10763L4.2755 9.40001C4.14428 9.46107 4.07867 9.4916 4.0307 9.46401C3.98273 9.43641 3.98273 9.36814 3.98273 9.23159V7.85356Z" fill="#71717A"/>
                </svg>
                CV</p>
                <p>
                    <svg width="25" height="26" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C9.58579 0 9.25 0.335786 9.25 0.75V11.7226L7.56944 9.76191C7.29988 9.44741 6.8264 9.41099 6.51191 9.68056C6.19741 9.95012 6.16099 10.4236 6.43056 10.7381L9.43056 14.2381C9.57304 14.4043 9.78106 14.5 10 14.5C10.2189 14.5 10.427 14.4043 10.5694 14.2381L13.5694 10.7381C13.839 10.4236 13.8026 9.95012 13.4881 9.68056C13.1736 9.41099 12.7001 9.44741 12.4306 9.76191L10.75 11.7226L10.75 0.75C10.75 0.335786 10.4142 0 10 0Z" fill="#BEBECD"/>
                    <path d="M12.25 7.75V8.12828C12.9836 7.86973 13.8312 7.9991 14.4642 8.54167C15.4077 9.35037 15.517 10.7708 14.7083 11.7143L11.7083 15.2143C11.2808 15.713 10.6568 16 9.99996 16C9.34313 16 8.71909 15.713 8.29163 15.2143L5.29163 11.7143C4.48293 10.7708 4.5922 9.35037 5.53568 8.54167C6.16868 7.9991 7.01637 7.86973 7.74996 8.12828V7.75H6C3.17157 7.75 1.75736 7.75 0.878679 8.62868C0 9.50736 0 10.9216 0 13.75V14.75C0 17.5784 0 18.9926 0.878679 19.8713C1.75736 20.75 3.17157 20.75 5.99999 20.75H14C16.8284 20.75 18.2426 20.75 19.1213 19.8713C20 18.9926 20 17.5784 20 14.75V13.75C20 10.9216 20 9.50736 19.1213 8.62868C18.2426 7.75 16.8284 7.75 14 7.75H12.25Z" fill="#BEBECD"/>
                    </svg>
                </p>

            </div>
            <Card className="p-3 overflow-y-auto">
                <p>🧑‍💻 About Me</p>
                Full-Stack Developer specializing in MERN + TypeScript, building scalable and AI-powered web applications.
                I focus on clean architecture, performance, and creating products that solve real problems.

                <p>⚡ What I Do</p>
                Build full-stack apps from idea → deployment
                Design type-safe APIs and scalable backends
                Create modern, responsive UIs with React + Tailwind
                Integrate AI features (summaries, quizzes, tutors)
                <p>🚀 Experience Snapshot</p>
                Developed and deployed multiple full-stack applications
                Built an AI-powered learning platform (EchoStudy)
                Implemented authentication, APIs, and database systems
                Optimized performance and user experience
            </Card>
        </Card>
    )
}
function DetailsPanel() {
    return(
        <div className="min-w-[135px] min-h-screen flex flex-col sm:flex-row lg:flex-col gap-4">
            <Experiences /> 
            <CV />  
        </div>
    )
}
export default DetailsPanel