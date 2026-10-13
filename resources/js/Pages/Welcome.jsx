import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

export default function Welcome({ auth }) {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('All');
    const [saved, setSaved] = useState([]);

    const scholarships = [
        { id: 1, title: 'CHED Merit Scholarship', provider: 'Commission on Higher Education', amount: '₱120,000 / year', deadline: 'May 30, 2026', level: 'College', type: 'Merit', tags: ['Full Tuition', 'Allowance'], color: 'bg-blue-500' },
        { id: 2, title: 'DOST-SEI Science Scholarship', provider: 'DOST Philippines', amount: '₱80,000 / year', deadline: 'June 15, 2026', level: 'College', type: 'STEM', tags: ['STEM Only', 'Stipend'], color: 'bg-emerald-500' },
        { id: 3, title: 'Iloilo City Scholars Program', provider: 'San Carlos City Government', amount: '₱25,000 / sem', deadline: 'April 28, 2026', level: 'Senior High', type: 'Local Gov', tags: ['Local', 'Easy Apply'], color: 'bg-violet-500' },
        { id: 4, title: 'SM Foundation Scholarship', provider: 'SM Foundation', amount: 'Full Scholarship', deadline: 'July 10, 2026', level: 'College', type: 'Private', tags: ['Private', 'Mentorship'], color: 'bg-orange-500' },
        { id: 5, title: 'Erasmus+ International', provider: 'European Union', amount: 'Fully Funded', deadline: 'Aug 01, 2026', level: 'Masters', type: 'International', tags: ['Abroad'], color: 'bg-pink-500' },
        { id: 6, title: 'OWWA Scholarship for OFW Dependents', provider: 'OWWA', amount: '₱60,000 / year', deadline: 'May 10, 2026', level: 'College', type: 'OFW', tags: ['OFW Family'], color: 'bg-teal-500' },
    ];

    const toggleSave = (id) => {
        setSaved(prev => prev.includes(id)? prev.filter(x => x!== id) : [...prev, id]);
    };

    const filtered = scholarships.filter((s) => {
        const matchesSearch = s.title.toLowerCase().includes(search.toLowerCase()) || s.provider.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filter === 'All' || s.level === filter || s.type === filter;
        return matchesSearch && matchesFilter;
    });

    const categories = ['All', 'College', 'Senior High', 'Masters', 'STEM', 'Merit', 'International'];

    return (
        <>
            <Head title="ScholarPath - by Cathy Mae Sundo" />
            <div className="min-h-screen bg-[#F8F9FF] text-zinc-900">
                <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                        <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#635BFF] font-bold text-white">S</div>
                            <span className="text-lg font-bold">ScholarPath</span>
                            <span className="ml-2 hidden rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-medium text-violet-700 sm:inline">by Cathy Mae Sundo</span>
                        </div>
                        <nav className="flex items-center gap-2">
                            {auth?.user? (
                                <Link href={route('dashboard')} className="rounded-full bg-[#635BFF] px-5 py-2.5 text-sm font-medium text-white">My Home</Link>
                            ) : (
                                <>
                                    <Link href={route('login')} className="rounded-full px-4 py-2.5 text-sm font-medium">Log in</Link>
                                    <Link href={route('register')} className="rounded-full bg-[#635BFF] px-5 py-2.5 text-sm font-medium text-white">Get Started</Link>
                                </>
                            )}
                        </nav>
                    </div>
                </header>

                <main className="mx-auto max-w-7xl px-6 py-16">
                    <h1 className="text-5xl font-bold">Find your scholarship <span className="text-[#635BFF]">in 30 seconds.</span></h1>
                    <p className="mt-4 text-zinc-600">ScholarPath by Cathy Mae Sundo - Owner from San Carlos City</p>

                    <div className="mt-8 flex gap-2">
                        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." className="rounded-xl border px-4 py-3 text-sm w-64" />
                        {categories.map(c => (
                            <button key={c} onClick={() => setFilter(c)} className={`rounded-full px-3.5 py-1.5 text-xs font-medium ${filter===c?'bg-[#635BFF] text-white':'bg-zinc-100'}`}>{c}</button>
                        ))}
                    </div>

                    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {filtered.map(s => (
                            <div key={s.id} className="rounded-2xl border bg-white p-5">
                                <h3 className="font-semibold">{s.title}</h3>
                                <p className="text-sm text-zinc-500">{s.provider}</p>
                                <p className="mt-2 text-sm font-semibold">{s.amount} - {s.deadline}</p>
                                <div className="mt-4 flex gap-2">
                                    <button className="flex-1 rounded-full bg-zinc-900 py-2 text-sm text-white">Apply</button>
                                    <button onClick={() => toggleSave(s.id)} className={`rounded-full border px-4 py-2 text-sm ${saved.includes(s.id)?'bg-[#635BFF] text-white':''}`}>{saved.includes(s.id)?'Saved':'Save'}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>

                <footer className="border-t py-10 text-center text-sm">
                    <p className="font-semibold">© 2026 ScholarPath • Built by Cathy Mae Sundo - San Carlos City</p>
                </footer>
            </div>
        </>
    );
}