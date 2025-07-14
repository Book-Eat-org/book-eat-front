import {
    ReactNode,
    ReactElement,
    isValidElement,
    Children,
    ComponentType
} from "react";

type ExtractedSections<T> = {
    [K in keyof T]: ReactElement | null;
} & {
    rest: ReactNode[];
};

/**
 * Универсальный парсер детей компонентов.
 * @param children - React дети
 * @param sections - Объект с компонентами для извлечения
 * @returns Объект с найденными компонентами и остатком
 */
export function extractSections<T extends Record<string, ComponentType<never>>>(
    children: ReactNode,
    sections: T
): ExtractedSections<T> {
    const result: Partial<ExtractedSections<T>> = {
        rest: []
    };

    Children.forEach(children, child => {
        if (isValidElement(child)) {
            const match = (Object.entries(sections) as [keyof T, ComponentType<any>][]).find(
                ([, componentType]) => child.type === componentType
            );

            if (match) {
                const [key] = match;
                result[key] = child;
            } else {
                (result.rest as ReactNode[]).push(child);
            }
        } else {
            (result.rest as ReactNode[]).push(child);
        }
    });

    // Убедимся, что все ключи присутствуют
    for (const key in sections) {
        if (!(key in result)) {
            result[key] = null;
        }
    }

    return result as ExtractedSections<T>;
}
