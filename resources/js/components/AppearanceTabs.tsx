import { Appearance, useAppearance } from '@/hooks/use-appearance';
import { cn } from '@/lib/utils';
import { LucideIcon, Monitor, Moon, Sun } from 'lucide-react';
import { HTMLAttributes } from 'react';

export default function AppearanceToggleTab({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
    const { appearance, updateAppearance } = useAppearance();

    const tabs: { value: Appearance; icon: LucideIcon; label: string }[] = [
        { value: 'light', icon: Sun, label: 'Light' },
        { value: 'dark', icon: Moon, label: 'Dark' },
        { value: 'system', icon: Monitor, label: 'System' },
    ];

    return (
        <div className={cn('btn-group', className)} {...props}>
            {tabs.map((tab) => (
                <button
                    key={tab.value}
                    onClick={() => updateAppearance(tab.value)}
                    className={cn(
                        'btn btn-primary btn-lg',
                        appearance === tab.value ? 'btn-secondary' : '',
                    )}
                >
                    <tab.icon className="w-4 h-4 mr-2" />
                    <span>{tab.label}</span>
                </button>
            ))}
        </div>
    );
}
