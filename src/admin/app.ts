import { css } from 'styled-components';
import { getPluginTheme } from '@_sh/strapi-plugin-ckeditor';

export default {
    config: {
        theme: {
            light: {
              colors: {
                primary100: '#c9ffeb',
                primary200: '#5effc3',
                primary500: '#00f298',
                buttonPrimary500: '#fff298',
                primary600: '#00bd77',
                buttonPrimary600: '#ffbd77',
                primary700: '#008755',
              }
            }
          }
    },
    register() {
        const pluginTheme = getPluginTheme();

        // Appended, not replaced: the plugin's own `additional` styles carry the fullscreen editor rules.
        pluginTheme.additional = [
            pluginTheme.additional,
            css`
                .ck.ck-editor__main > .ck-editor__editable.ck-editor__editable_inline,
                .ck .ck-source-editing-area,
                .ck .ck-source-editing-area textarea {
                    background: ${({ theme }) => theme.colors.neutral150};
                }
            `,
        ];
    },
    bootstrap() {},
  }