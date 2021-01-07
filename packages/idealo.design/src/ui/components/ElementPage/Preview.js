import React from 'react'
import { Desktop } from '@storybook/ui/dist/components/layout/desktop'

import { SPanel, SMain, SPreview, Layout } from '@storybook/ui/dist/components/layout/container'
import { Panel } from '@storybook/ui/dist/components/panel/panel'
import { styled as theme } from '@storybook/theming/dist/'
import { ThemeProvider, ensure as ensureTheme } from '@storybook/theming/dist';
import App from '@storybook/ui/dist/app'
import { Root, Provider } from '@storybook/ui/dist'
import { addons } from '@storybook/addons/dist';
import dynamic from 'next/dynamic'

import StorybookPreview from './StorybookPreview';

const Preview = dynamic(
    // () => import('./StorybookPreview'),
    // () => import('./StorybookPreview_slim'),
    () => import('./StorybookPreview'),
    { ssr: false }
)


export { Preview }

