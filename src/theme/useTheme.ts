import { useTheme as useShopifyTheme } from '@shopify/restyle';
import { Theme } from './theme';

export const useTheme = () => useShopifyTheme<Theme>();
