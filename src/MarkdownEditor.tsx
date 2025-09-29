import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import {
  Markdown,
  PasteFromMarkdownExperimental,
  ClassicEditor,
  Autoformat,
  AutoImage,
  Autosave,
  BalloonToolbar,
  BlockQuote,
  Bold,
  CloudServices,
  Essentials,
  Heading,
  ImageBlock,
  ImageCaption,
  ImageInline,
  ImageInsertViaUrl,
  ImageResize,
  ImageStyle,
  ImageTextAlternative,
  ImageToolbar,
  ImageUpload,
  Italic,
  Link,
  LinkImage,
  List,
  ListProperties,
  Paragraph,
  PasteFromOffice,
  TextTransformation,
  TodoList,
  EventInfo,
  Editor,
  Table,
  TableToolbar,
  SourceEditing
} from 'ckeditor5'
import { Retool } from '@tryretool/custom-component-support'

import 'ckeditor5/ckeditor5.css'

import './Editor.css'
const LICENSE_KEY = 'GPL'

export const MarkdownEditor: React.FC = () => {
  Retool.useComponentSettings({
    defaultWidth: 12,
    defaultHeight: 36
  })
  const [value, setValue] = Retool.useStateString({
    name: 'value',
    label: 'Default value'
  })
  const [placeholder, _setPlaceholder] = Retool.useStateString({
    name: 'placeholder',
    label: 'Placeholder',
    initialValue: 'Type or paste your content here!'
  })

  const onChange = (event: EventInfo, editor: Editor) => {
    setValue(editor.getData())
  }

  const editorConfig = {
    toolbar: {
      items: [
        'heading',
        '|',
        'bold',
        'italic',
        '|',
        'link',
        'blockQuote',
        'insertTable',
        '|',
        'bulletedList',
        'numberedList',
        'todoList',
        '|',
        'sourceEditing'
      ],
      shouldNotGroupWhenFull: false
    },
    plugins: [
      Markdown, // if ever HTML is needed remove the top 2 plugins
      PasteFromMarkdownExperimental,
      Autoformat,
      AutoImage,
      Autosave,
      BalloonToolbar,
      BlockQuote,
      Bold,
      CloudServices,
      Essentials,
      Heading,
      ImageBlock,
      ImageCaption,
      ImageInline,
      ImageInsertViaUrl,
      ImageResize,
      ImageStyle,
      ImageTextAlternative,
      ImageToolbar,
      ImageUpload,
      Italic,
      Link,
      LinkImage,
      List,
      ListProperties,
      Paragraph,
      PasteFromOffice,
      SourceEditing,
      Table,
      TableToolbar,
      TextTransformation,
      TodoList
    ],
    balloonToolbar: [
      'bold',
      'italic',
      '|',
      'link',
      '|',
      'bulletedList',
      'numberedList'
    ],
    heading: {
      options: [
        {
          model: 'paragraph' as const,
          view: 'p',
          title: 'Paragraph',
          class: 'ck-heading_paragraph'
        },
        {
          model: 'heading1' as const,
          view: 'h1',
          title: 'Heading 1',
          class: 'ck-heading_heading1'
        },
        {
          model: 'heading2' as const,
          view: 'h2',
          title: 'Heading 2',
          class: 'ck-heading_heading2'
        },
        {
          model: 'heading3' as const,
          view: 'h3',
          title: 'Heading 3',
          class: 'ck-heading_heading3'
        },
        {
          model: 'heading4' as const,
          view: 'h4',
          title: 'Heading 4',
          class: 'ck-heading_heading4'
        },
        {
          model: 'heading5' as const,
          view: 'h5',
          title: 'Heading 5',
          class: 'ck-heading_heading5'
        },
        {
          model: 'heading6' as const,
          view: 'h6',
          title: 'Heading 6',
          class: 'ck-heading_heading6'
        }
      ]
    },
    image: {
      toolbar: [
        'toggleImageCaption',
        'imageTextAlternative',
        '|',
        'imageStyle:inline',
        'imageStyle:wrapText',
        'imageStyle:breakText',
        '|',
        'resizeImage'
      ]
    },
    initialData: value,
    licenseKey: LICENSE_KEY,
    link: {
      addTargetToExternalLinks: true,
      defaultProtocol: 'https://',
      decorators: {
        toggleDownloadable: {
          mode: 'manual' as const,
          label: 'Downloadable',
          attributes: {
            download: 'file'
          }
        }
      }
    },
    list: {
      properties: {
        styles: true,
        startIndex: true,
        reversed: true
      }
    },
    placeholder: placeholder,
    table: {
      contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
    }
  }

  return (
    <div className="main-container">
      <div className="editor-container editor-container_classic-editor">
        <div className="editor-container__editor">
          <div>
            <CKEditor
              editor={ClassicEditor}
              config={editorConfig}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
