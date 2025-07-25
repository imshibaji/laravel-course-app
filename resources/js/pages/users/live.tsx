import Chat from "@/components/Chat";
import CourseLearningCard from "@/components/CourseLearningCard";
import UserLayout from "@/layouts/UserLayout";

export default function Live() {

    return (
        <UserLayout>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-9">
                        <CourseLearningCard
                            title="Power of Code"
                            youtubeLink="https://www.youtube.com/watch?v=GpJGmdQBMas"
                            footer={
                                <h5>What you will learn</h5>
                            }
                        >
                            <p>In this live session, we will explore the power of coding and how it can transform your career.</p>
                            <p>Join us to learn about the latest trends in technology and how you can leverage them for your personal and professional growth.</p>
                            <p>By the end of this live session, you will have a deeper understanding of the importance of coding and how it can help you succeed in your career.</p>
                            <p>Thank you for joining us!</p>

                        </CourseLearningCard>
                    </div>
                    <div className="col-md-3 d-none d-md-block">
                        <div style={{ position: "sticky", top: "20px" }}>
                            <Chat />
                        </div>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}