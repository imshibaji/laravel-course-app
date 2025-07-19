import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] text-[#1b1b18] lg:justify-center dark:bg-[#0a0a0a]">
                <header className="flex flex-col items-center bg-blue-950 w-full m-0">
                    <div className="flex flex-row my-4 justify-between w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-7xl">
                        <div className="flex items-center justify-between">
                            <Link
                                href="/"
                                className="text-lg font-bold text-white hover:text-[#FF6B6B] dark:hover:text-[#FF6B6B]"
                            >
                                CourseApp
                            </Link>
                        </div>
                        <nav className="flex items-center justify-end gap-4">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </nav>
                    </div>
                </header>
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full gap-10 max-w-[335px] flex-col-reverse lg:max-w-7xl lg:flex-row">
                        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:mt-0 md:text-6xl">
                            <span className="block text-black dark:text-white">Welcome to</span>
                            <span className="block text-[#FF6B6B]">CourseApp</span>
                        </h1>
                        <div className="flex w-full flex-col items-center justify-center gap-6 lg:items-start lg:gap-8">
                            <p className="text-center text-sm leading-normal text-[#1b1b18] dark:text-[#EDEDEC] lg:text-left">
                                CourseApp is a modern, open-source platform designed to help you create, manage, and
                                share your courses with ease. Whether you're an educator, a student, or just someone
                                passionate about learning, CourseApp has something for you.
                            </p>
                            <Link
                                href={route('register')}
                                className="inline-block rounded-sm bg-[#FF6B6B] px-5 py-1.5 text-sm font-medium leading-normal text-white hover:bg-[#FF6B6B] dark:bg-[#FF6B6B] dark:hover:bg-[#FF6B6B] dark:text-white"
                            >
                                Get Started
                            </Link>
                        </div>
                    </main>
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
