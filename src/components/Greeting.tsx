import { useState } from 'preact/hooks';

export default function Greeting({ messages }: { messages: string[] }) {
  const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];
  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div class="space-y-3">
      <p class="text-lg font-medium light:text-[#5a5f6b] dark:text-[#a0a9ba]">
        {greeting}
      </p>
      <button
        onClick={() => setGreeting(randomMessage())}
        class="px-4 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer border
          light:bg-white light:text-[#5a5f6b] light:border-gray-200 light:hover:border-blue-300 light:hover:text-blue-600
          dark:bg-white/5 dark:text-[#6b7394] dark:border-[#1e2d50] dark:hover:border-blue-700 dark:hover:text-blue-400"
      >
        换一句
      </button>
    </div>
  );
}
