import type { Schema, Struct } from '@strapi/strapi'

export interface SharedCast extends Struct.ComponentSchema {
  collectionName: 'components_shared_casts'
  info: {
    displayName: 'Cast'
    icon: 'alien'
  }
  attributes: {
    Role: Schema.Attribute.Component<'shared.role', true>
    Team_Member: Schema.Attribute.Component<'shared.team-member', true>
  }
}

export interface SharedDisplayOptions extends Struct.ComponentSchema {
  collectionName: 'components_shared_display_options'
  info: {
    displayName: 'Display Options'
    icon: 'television'
  }
  attributes: {
    Display_Index: Schema.Attribute.Decimal
    Featured_Image: Schema.Attribute.Media<'images'>
    Hero_Carousel_Artwork: Schema.Attribute.Media<'images'>
    Image: Schema.Attribute.Media<'images'>
    Index: Schema.Attribute.Integer & Schema.Attribute.Required
  }
}

export interface SharedFaq extends Struct.ComponentSchema {
  collectionName: 'components_shared_faqs'
  info: {
    displayName: 'FAQ'
    icon: 'apps'
  }
  attributes: {
    Answer: Schema.Attribute.RichText
    Question: Schema.Attribute.RichText
  }
}

export interface SharedFormat extends Struct.ComponentSchema {
  collectionName: 'components_shared_formats'
  info: {
    displayName: 'Format'
    icon: 'bulletList'
  }
  attributes: {
    Format: Schema.Attribute.Enumeration<
      ['Bonus', 'Cinematic', 'Immersion', 'Classic', 'Audiobook']
    > &
      Schema.Attribute.DefaultTo<'Audiobook'>
  }
}

export interface SharedGenre extends Struct.ComponentSchema {
  collectionName: 'components_shared_genres'
  info: {
    displayName: 'Genre'
    icon: 'priceTag'
  }
  attributes: {
    Description: Schema.Attribute.Text
    Name: Schema.Attribute.String & Schema.Attribute.Required
    Show_In_Home: Schema.Attribute.Boolean
  }
}

export interface SharedHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_headers'
  info: {
    displayName: 'Header'
    icon: 'alien'
  }
  attributes: {
    Header: Schema.Attribute.RichText
  }
}

export interface SharedImprints extends Struct.ComponentSchema {
  collectionName: 'components_shared_imprints'
  info: {
    displayName: 'Imprints'
    icon: 'bulletList'
  }
  attributes: {
    Imprints: Schema.Attribute.Enumeration<
      [
        'Soundbooth',
        'Soundbooth Theater Burlesque',
        'Soundbooth Theater Original',
        'Aethon Audio'
      ]
    >
  }
}

export interface SharedInformations extends Struct.ComponentSchema {
  collectionName: 'components_shared_informations'
  info: {
    displayName: 'Informations'
    icon: 'book'
  }
  attributes: {
    Format: Schema.Attribute.Component<'shared.format', false>
    Genre: Schema.Attribute.Component<'shared.genre', true>
    Imprints: Schema.Attribute.Component<'shared.imprints', true>
    Type: Schema.Attribute.Component<'shared.type', false>
    Visibilites: Schema.Attribute.Component<'shared.visibilities', true>
  }
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media'
  info: {
    displayName: 'Media'
    icon: 'file-video'
  }
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>
  }
}

export interface SharedParentalControl extends Struct.ComponentSchema {
  collectionName: 'components_shared_parental_controls'
  info: {
    displayName: 'Parental Control'
    icon: 'bulletList'
  }
  attributes: {
    Content_Rating_Reviewed: Schema.Attribute.Boolean
  }
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes'
  info: {
    displayName: 'Quote'
    icon: 'indent'
  }
  attributes: {
    body: Schema.Attribute.Text
    title: Schema.Attribute.String
  }
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts'
  info: {
    description: ''
    displayName: 'Rich text'
    icon: 'align-justify'
  }
  attributes: {
    body: Schema.Attribute.RichText
  }
}

export interface SharedRole extends Struct.ComponentSchema {
  collectionName: 'components_shared_roles'
  info: {
    displayName: 'Role'
    icon: 'alien'
  }
  attributes: {
    Role: Schema.Attribute.Enumeration<
      ['Author', 'Featuring', 'Narrator', 'Sound Design', 'Music']
    >
  }
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos'
  info: {
    description: ''
    displayName: 'Seo'
    icon: 'allergies'
    name: 'Seo'
  }
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required
    shareImage: Schema.Attribute.Media<'images'>
  }
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders'
  info: {
    description: ''
    displayName: 'Slider'
    icon: 'address-book'
  }
  attributes: {
    files: Schema.Attribute.Media<'images', true>
  }
}

export interface SharedStatus extends Struct.ComponentSchema {
  collectionName: 'components_shared_statuses'
  info: {
    displayName: 'Status'
    icon: 'code'
  }
  attributes: {
    Archived: Schema.Attribute.Boolean
    Display_Release_Date_On_Preorder: Schema.Attribute.Boolean
    Item_Status: Schema.Attribute.Enumeration<
      ['Draft', 'Published', 'Scheduled']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Draft'>
    Original_Release_Date: Schema.Attribute.DateTime
    Platform_Release_Date: Schema.Attribute.DateTime & Schema.Attribute.Required
    Preorder_Date: Schema.Attribute.DateTime
  }
}

export interface SharedStore extends Struct.ComponentSchema {
  collectionName: 'components_shared_stores'
  info: {
    displayName: 'Store'
    icon: 'feather'
  }
  attributes: {
    Free: Schema.Attribute.Boolean
    Price: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 2000
          min: 0
        },
        number
      >
  }
}

export interface SharedTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_shared_team_members'
  info: {
    displayName: 'Team Member'
    icon: 'alien'
  }
  attributes: {
    Name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255
      }>
  }
}

export interface SharedType extends Struct.ComponentSchema {
  collectionName: 'components_shared_types'
  info: {
    displayName: 'Type'
    icon: 'bulletList'
  }
  attributes: {
    Type: Schema.Attribute.Enumeration<['Book', 'Audio File', 'Movie', 'Image']>
  }
}

export interface SharedVisibilities extends Struct.ComponentSchema {
  collectionName: 'components_shared_visibilities'
  info: {
    displayName: 'Visibilities'
    icon: 'bulletList'
  }
  attributes: {
    Visibilities: Schema.Attribute.Enumeration<
      ['Show On App', 'Sbt Direct', 'Disable Purchases', 'Audible Only']
    >
  }
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.cast': SharedCast
      'shared.display-options': SharedDisplayOptions
      'shared.faq': SharedFaq
      'shared.format': SharedFormat
      'shared.genre': SharedGenre
      'shared.header': SharedHeader
      'shared.imprints': SharedImprints
      'shared.informations': SharedInformations
      'shared.media': SharedMedia
      'shared.parental-control': SharedParentalControl
      'shared.quote': SharedQuote
      'shared.rich-text': SharedRichText
      'shared.role': SharedRole
      'shared.seo': SharedSeo
      'shared.slider': SharedSlider
      'shared.status': SharedStatus
      'shared.store': SharedStore
      'shared.team-member': SharedTeamMember
      'shared.type': SharedType
      'shared.visibilities': SharedVisibilities
    }
  }
}
