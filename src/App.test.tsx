import axios from "axios";

jest.mock("axios");
describe("get data by axios", () => {
  afterEach(() => jest.restoreAllMocks());
  test("get book data", async () => {
    const book = [
      {
        volumeInfo: {
          title: "title",
          subtitle: "subtitle",
          readingModes: {
            text: true,
            image: true,
          },
          publisher: "publiser",
          publishedDate: "publishDate",
          printType: "printType",
          previewLink: "previewLink",
          pageCount: "pageCount",
          maturityRating: "maturityRating",
          language: "language",
          infoLink: "infoLink",
          industryIdentifiers: [
            { type: "type", identifier: "identifier" },
            { type: "type", identifier: "identifier" },
          ],
          imageLinks: {
            smallThumbnail: "smallThumbnail",
            thumbnail: "thumbnail",
          },
          description: "description",
          contentVersion: "contentVersion",
          categories: ["categories"],
          canonicalVolumeLink: "canonicalVolumeLink",
          authors: ["authors"],
          allowAnonLogging: true,
        },
        selfLink: "selfLink",
        searchInfo: {},
        saleInfo: {},
        kind: "kind",
        id: "id",
        etag: "etag",
        accessInfo: {},
      },
    ];
    (axios.get as jest.Mock).mockResolvedValue({ data: { items: book } });
    const _searchBookInfo = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=example&maxResults=10&langRestrict=ja&orderBy=relevance&printType=books`
    );
    expect(_searchBookInfo.data.items).toEqual(book);
  });
});
