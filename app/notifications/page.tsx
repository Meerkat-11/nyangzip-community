import { AppShell } from '@/components/app-shell';
import { notifications } from '@/lib/data';

export default function NotificationsPage() {
  return (
    <AppShell>
      <div className="rounded-2xl border border-line bg-white p-5 shadow-card">
        <h1 className="text-2xl font-bold text-ink">알림</h1>
        <div className="mt-5 space-y-3">
          {notifications.map((item) => (
            <div key={item.id} className={`flex items-start justify-between gap-3 rounded-xl border p-4 ${item.unread ? 'border-blush-200 bg-blush-50' : 'border-line bg-soft'}`}>
              <div>
                <p className="text-sm text-slate-700">{item.text}</p>
                <p className="mt-1 text-xs text-slate-500">{item.time}</p>
              </div>
              {item.unread && <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blush-500" />}
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
