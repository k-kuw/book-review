type Book = {
  volumeInfo: {
    title: string;
    subtitle: string;
    readingModes: {
      text: boolean;
      image: boolean;
    };
    publisher: string;
    publishedDate: string;
    printType: string;
    previewLink: string;
    pageCount: number;
    maturityRating: string;
    language: string;
    infoLink: string;
    industryIdentifiers: [
      { type: string; identifier: string },
      { type: string; identifier: string }
    ];
    imageLinks: { smallThumbnail: string; thumbnail: string };
    description: string;
    contentVersion: string;
    categories: [string];
    canonicalVolumeLink: string;
    authors: [string];
    allowAnonLogging: boolean;
  };
  selfLink: string;
  searchInfo: {};
  saleInfo: {};
  kind: string;
  id: string;
  etag: string;
  accessInfo: {};
};

// 登録orログインform入力の型定義
type SignIn = {
  displayName: string;
  email: string;
  password: string;
};

export type { Book, SignIn };
