import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">My ScholarPath Home</h2>}
        >
            <Head title="My Home - ScholarPath" />

            <div className="py-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-6">

                    {/* Welcome Card */}
                    <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#635BFF] to-[#8B5CF6] p-8 text-white shadow-xl">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                                <h1 className="text-3xl font-bold">Hi, {auth.user.name}! 👋</h1>
                                <p className="mt-2 text-white/80">Welcome to your ScholarPath dashboard • Owner: Cathy Mae Sundo</p>
                                <p className="mt-1 text-sm text-white/60">{auth.user.email}</p>
                            </div>
                            <Link href="/" className="rounded-full bg-white px-6 py-3 text-sm font-bold text-[#635BFF] hover:bg-zinc-100 text-center">
                                Find Scholarships
                            </Link>
                        </div>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        {/* Stats */}
                        <div className="lg:col-span-2 grid gap-6 sm:grid-cols-3">
                            <div className="rounded-2xl bg-white p-6 shadow dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                                <p className="text-sm text-zinc-500">Saved</p>
                                <p className="mt-2 text-3xl font-bold">3</p>
                                <p className="mt-1 text-xs text-emerald-600">+1 this week</p>
                            </div>
                            <div className="rounded-2xl bg-white p-6 shadow dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                                <p className="text-sm text-zinc-500">Applied</p>
                                <p className="mt-2 text-3xl font-bold">2</p>
                                <p className="mt-1 text-xs text-blue-600">CHED & DOST</p>
                            </div>
                            <div className="rounded-2xl bg-white p-6 shadow dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                                <p className="text-sm text-zinc-500">Deadlines</p>
                                <p className="mt-2 text-3xl font-bold">1</p>
                                <p className="mt-1 text-xs text-red-500">Due in 5 days!</p>
                            </div>

                            <div className="sm:col-span-3 rounded-2xl bg-white p-6 shadow dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                                <h3 className="font-bold">My Application Tracker</h3>
                                <div className="mt-6 space-y-4">
                                    <div className="flex items-center justify-between rounded-xl bg-violet-50 p-4 dark:bg-violet-900/20">
                                        <div className="flex items-center gap-3"><div className="h-10 w-10 rounded-xl bg-blue-500 flex items-center justify-center text-white font-bold">C</div><div><p className="font-semibold text-sm">CHED Merit Scholarship</p><p className="text-xs text-zinc-500">Submitted • Waiting for result</p></div></div><span className="text-xs rounded-full bg-yellow-100 px-3 py-1 text-yellow-700">Pending</span>
                                    </div>
                                    <div className="flex items-center justify-between rounded-xl bg-emerald-50 p-4 dark:bg-emerald-900/20">
                                        <div className="flex items-center gap-3"><div className="h-10 w-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white font-bold">D</div><div><p className="font-semibold text-sm">DOST-SEI Scholarship</p><p className="text-xs text-zinc-500">Documents incomplete</p></div></div><span className="text-xs rounded-full bg-red-100 px-3 py-1 text-red-700">Action Needed</span>
                                    </div>
                                </div>
                                <Link href="/" className="mt-6 inline-block text-sm font-semibold text-[#635BFF] hover:underline">Browse more scholarships →</Link>
                            </div>
                        </div>

                        {/* Profile / Owner Card */}
                        <div className="space-y-6">
                            <div className="rounded-2xl bg-white p-6 shadow dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                                <h3 className="font-bold">My Profile</h3>
                                <div className="mt-4 flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full bg-zinc-900 text-white flex items-center justify-center font-bold dark:bg-white dark:text-black">{auth.user.name[0]}</div>
                                    <div><p className="font-semibold">{auth.user.name}</p><p className="text-sm text-zinc-500">Student • San Carlos City</p></div>
                                </div>
                                <div className="mt-6 space-y-2 text-sm">
                                    <div className="flex justify-between"><span className="text-zinc-500">Course:</span><span className="font-medium">BSIT</span></div>
                                    <div className="flex justify-between"><span className="text-zinc-500">GWA:</span><span className="font-medium">1.75</span></div>
                                    <div className="flex justify-between"><span className="text-zinc-500">Year:</span><span className="font-medium">1st Year</span></div>
                                </div>
                                <button className="mt-6 w-full rounded-full bg-zinc-900 py-2.5 text-sm text-white dark:bg-white dark:text-black">Edit Profile</button>
                            </div>

                            <div className="rounded-2xl bg-zinc-900 p-6 text-white dark:bg-white dark:text-black">
                                <p className="text-xs font-semibold opacity-60">BUILT BY</p>
                                <p className="mt-2 text-lg font-bold">Cathy Mae Sundo</p>
                                <p className="mt-1 text-sm opacity-70">Founder, ScholarPath</p>
                                <p className="mt-4 text-xs opacity-50">San Carlos City, Philippines<br/>© 2026 ScholarPath<br/>Making scholarships easy for every Filipino student.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}