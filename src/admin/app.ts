import { css } from 'styled-components';
import { getPluginPresets, getPluginTheme } from '@_sh/strapi-plugin-ckeditor';

const FONT_STYLESHEETS = [
    'https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap',
    'https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap',
];

// CKEditor drops its built-in list when `options` is set, so the stock fonts are repeated here.
const FONT_FAMILY_OPTIONS = [
    'default',
    'Clash Display, sans-serif',
    'Karla, sans-serif',
    'Arial, Helvetica, sans-serif',
    'Courier New, Courier, monospace',
    'Georgia, serif',
    'Lucida Sans Unicode, Lucida Grande, sans-serif',
    'Tahoma, Geneva, sans-serif',
    'Times New Roman, Times, serif',
    'Trebuchet MS, Helvetica, sans-serif',
    'Verdana, Geneva, sans-serif',
];

function loadFontStylesheets() {
    for (const href of FONT_STYLESHEETS) {
        if (document.querySelector(`link[href="${href}"]`)) continue;

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
    }
}

export default {
    config: {
        
    },
    register() {
        loadFontStylesheets();

        const htmlEditorConfig = getPluginPresets().defaultHtml.editorConfig;
        htmlEditorConfig.fontFamily = {
            ...htmlEditorConfig.fontFamily,
            options: FONT_FAMILY_OPTIONS,
        };

        const pluginTheme = getPluginTheme();

        // Appended, not replaced: the plugin's own `additional` styles carry the fullscreen editor rules.
        pluginTheme.additional = [
            pluginTheme.additional,
            css`
                .ck.ck-editor__main > .ck-editor__editable.ck-editor__editable_inline,
                .ck .ck-source-editing-area,
                .ck .ck-source-editing-area textarea {
                    background: ${({ theme }) => theme.colors.neutral200};
                }
            `,
            css`
                .ck-content {
                    --ck-content-font-family: Karla, sans-serif;
                    /* Declared at :root against the root value, so it needs setting again here. */
                    --ck-content-list-marker-font-family: Karla, sans-serif;
                }
            `,
            // CKEditor caps neither the panel nor the list, so a long font list grows until it flips upward.
            css`
                .ck.ck-dropdown.ck-font-family-dropdown > .ck-dropdown__panel > .ck-list {
                    max-height: 240px;
                    overflow-y: auto;
                }
            `,
        ];
    },
    bootstrap() {},
  }