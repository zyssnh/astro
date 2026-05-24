import { useState } from 'preact/hooks';

export default function Greeting({ messages }: { messages: string[] }) {
  const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];
  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div class="space-y-4">
      <h3 class="text-xl sm:text-2xl font-semibold light:text-slate-800 dark:text-amber-50">
        {greeting}！感谢来访！
      </h3>
      <button
        onClick={() => setGreeting(randomMessage())}
        class="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer
          light:bg-indigo-50 light:text-indigo-600 light:hover:bg-indigo-100 light:border light:border-indigo-200
          dark:bg-white/10 dark:text-amber-200 dark:hover:bg-white/20 dark:border dark:border-amber-50/30"
      >
        换一句欢迎语
      </button>
    </div>
  );
}
