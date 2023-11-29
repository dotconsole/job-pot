import * as natural from 'natural'


class NLP {
  classifier;
  constructor() {
    const classifier = new natural.BayesClassifier();
    classifier.addDocument('work experience', 'experience');
    classifier.train();
    this.classifier = classifier;
  }
}

export const nlp = new NLP();
