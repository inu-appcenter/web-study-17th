// 추천 문서 더미 데이터
export interface RecommendedDocument {
  title: string;
  author: string;
  publisher: string;
  pubDate: string;
  description: string;
  link: string;
}

export const recommendedDocuments: RecommendedDocument[] = [
  {
    title: "Squeeze-and-Excitation Networks.",
    author: "Jie Hu, Li Shen, Samuel Albanie, Gang Sun, Enhua Wu",
    publisher: "Medline",
    pubDate: "2020년",
    description:
      "IEEE Transactions on Pattern Analysis and Machine Intelligence",
    link: "https://example.com/doc1",
  },
  {
    title:
      "광녀와 유령: 『흰 옷을 입은 여자』와 『검은 옷을 입은 여자』 비교 연구",
    author: "노동옥",
    publisher: "한국동서비교문학학회",
    pubDate: "2017년",
    description: "동서비교문학저널",
    link: "https://example.com/doc2",
  },
  {
    title: "Analysis of crack formation and crack growth in concrete...",
    author: "A. Hillerborg, M. Modéer, P.-E. Petersson",
    publisher: "Elsevier",
    pubDate: "1976년",
    description: "Cement and Concrete Research",
    link: "https://example.com/doc3",
  },
  {
    title: "Global cancer statistics 2018",
    author: "Freddie Bray 외 다수",
    publisher: "Medline",
    pubDate: "2018년",
    description: "CA: A Cancer Journal for Clinicians",
    link: "https://example.com/doc4",
  },
  {
    title: "Preferred reporting items for systematic reviews and meta-analyses",
    author:
      "David Moher, Alessandro Liberati, Jennifer Tetzlaff, Douglas G Altman",
    publisher: "Medline",
    pubDate: "2009년",
    description: "CA: A Cancer Journal for Clinicians",
    link: "https://example.com/doc5",
  },
  {
    title: "Preferred reporting items for systematic reviews and meta-analyses",
    author:
      "David Moher, Alessandro Liberati, Jennifer Tetzlaff, Douglas G Altman",
    publisher: "Medline",
    pubDate: "2009년",
    description: "CA: A Cancer Journal for Clinicians",
    link: "https://example.com/doc5",
  },
  {
    title: "Mini-mental state",
    author: "Marshal F. Folstein, Susan E. Folstein, Paul R. McHugh",
    publisher: "Elsevier",
    pubDate: "1975년",
    description:
      "CA: A practical method for grading the cognitive state of patients for the clinician",
    link: "https://example.com/doc6",
  },
  {
    title: "Mini-mental state",
    author: "Marshal F. Folstein, Susan E. Folstein, Paul R. McHugh",
    publisher: "Elsevier",
    pubDate: "1975년",
    description:
      "CA: A practical method for grading the cognitive state of patients for the clinician",
    link: "https://example.com/doc7",
  },
  {
    title: "Cancer statistics",
    author: "Rebecca L. Siegel, Kimberly D.  Miller, Ahmedin Jemal",
    publisher: "Medline",
    pubDate: "2020년",
    description: "CA: A Cancer Journal for Clinicians",
    link: "https://example.com/doc8",
  },
  {
    title: "The theory of planned behavior",
    author: "Icek Ajzen",
    publisher: "Crossref",
    pubDate: "1991년",
    description: "CA: Elsevier",
    link: "https://example.com/doc9",
  },
  {
    title: "Protein measurement with the Folin phenol reagent",
    author: "O H LOWRY, N J ROSEBROUGH, A L FARR, R J RANDALL",
    publisher: "Medline",
    pubDate: "1951년",
    description: "CA: None",
    link: "https://example.com/doc10",
  },
];
export default recommendedDocuments;
