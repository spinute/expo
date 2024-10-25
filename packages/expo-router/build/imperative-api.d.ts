import { NavigationOptions } from './global-state/routing';
import { Href, RouteParamInput, Routes } from './types';
/**
 * Returns `router` object for imperative navigation.
 *
 * @example
 *```tsx
 * import { router } from 'expo-router';
 * import { Text } from 'react-native';
 *
 * export default function Route() {
 *
 *  return (
 *   <Text onPress={() => router.push('/home')}>Go Home</Text>
 *  );
 *}
 * ```
 */
export type Router = {
    /**
     * Go back in the navigation history.
     */
    back: () => void;
    /**
     * If there's history that supports invoking the `back` function.
     */
    canGoBack: () => boolean;
    /**
     * Navigate to the provided href using a push operation if possible.
     */
    push: <T extends string | object>(href: Href<T>, options?: NavigationOptions) => void;
    /**
     * Navigate to the provided `[href](#href)`.
     */
    navigate: <T extends string | object>(href: Href<T>, options?: NavigationOptions) => void;
    /**
     * Navigate to route without appending to the history. Can be used with
     * [`useFocusEffect`](#usefocuseffecteffect-do_not_pass_a_second_prop)
     * to redirect imperatively to a new screen.
     *
     * @see [Using `useRouter()` hook](/router/reference/redirects/) to redirect.
     * */
    replace: <T extends string | object>(href: Href<T>, options?: NavigationOptions) => void;
    /**
     * Navigates to the a stack lower than the current screen using the provided count if possible, otherwise 1.
     *
     * If the current screen is the only route, it will dismiss the entire stack.
     */
    dismiss: (count?: number) => void;
    /**
     * To return to the first screen in the closest stack. This is similar to
     * [popToTop](https://reactnavigation.org/docs/stack-actions/#poptotop) stack action.
     */
    dismissAll: () => void;
    /**
     * Check if it is possible to dismiss the current screen. Returns `true` if the
     * router is within the stack with more than one screen in stack's history.
     *
     */
    canDismiss: () => boolean;
    /**
     * Update the current route's query params.
     */
    setParams: <T extends Routes>(params: Partial<RouteParamInput<T>>) => void;
    /**
     * Reload the currently mounted route in experimental server mode. This can be used to re-fetch data.
     * @hidden
     */
    reload: () => void;
};
/**
 * @hidden
 */
export declare const router: Router;
//# sourceMappingURL=imperative-api.d.ts.map