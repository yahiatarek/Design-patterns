// factory example

// Factory Example

// class Document {
//   print() {
//     console.log('print document');
//   }
// }

// class Image {
//   print() {
//     console.log('print image');
//   }
// }

// class ImageDocument extends Image {
//   print() {
//     console.log('print image document');
//   }

//   edit() {
//     console.log('edit image document');
//     return this;
//   }
// }

// class WordDocument extends Document {
//   print() {
//     console.log('print Word document');
//   }

//   edit() {
//     console.log('edit Word document');
//     return this;
//   }
// }

// class PdfDocument extends Document {
//   print() {
//     console.log('print Pdf document');
//   }

//   edit() {
//     console.log('edit Pdf document');
//     return this;
//   }
// }

// class DocumentFactory {
//   createImage(type) {
//     if (type === 'jpg') {
//       return new ImageDocument();
//     }
//   }

//   createDocument(type) {
//     if (type === 'pdf') {
//       return new PdfDocument();
//     } else if (type === 'word') {
//       return new WordDocument();
//     } else {
//       throw new Error('Unknown document type.');
//     }
//   }
// }

// const doc = new DocumentFactory().createDocument('pdf').edit().print();
// const image = new DocumentFactory().createImage('jpg').edit().print();

// ----------------------------- Abstract factory ---------------------------------------------
// Abstract Factory Example

class Document {
  print() {
    console.log('print document');
  }
}

class Image {
  print() {
    console.log('print image');
  }
}

class ImageDocument extends Image {
  print() {
    console.log('print image document');
  }

  edit() {
    console.log('edit image document');
    return this;
  }
}

class WordDocument extends Document {
  print() {
    console.log('print Word document');
  }

  edit() {
    console.log('edit Word document');
    return this;
  }
}

class PdfDocument extends Document {
  print() {
    console.log('print Pdf document');
  }

  edit() {
    console.log('edit Pdf document');
    return this;
  }
}

// Abstract Factory Interface
class AbstractFactory {
  createDocument() {
    throw new Error('This method should be overridden!');
  }

  createImage() {
    throw new Error('This method should be overridden!');
  }
}

// Concrete Factory for Documents
class DocumentFactory extends AbstractFactory {
  createDocument(type) {
    if (type === 'pdf') {
      return new PdfDocument();
    } else if (type === 'word') {
      return new WordDocument();
    } else {
      throw new Error('Unknown document type.');
    }
  }

  createImage(type) {
    throw new Error('DocumentFactory does not create images.');
  }
}

// Concrete Factory for Images
class ImageFactory extends AbstractFactory {
  createImage(type) {
    if (type === 'jpg') {
      return new ImageDocument();
    } else {
      throw new Error('Unknown image type.');
    }
  }

  createDocument(type) {
    throw new Error('ImageFactory does not create documents.');
  }
}

const docFactory = new DocumentFactory();
const docFromAbstractFactory = docFactory.createDocument('pdf').edit().print();

const imageFactory = new ImageFactory();
const imageFromAbstractFactory = imageFactory.createImage('jpg').edit().print();
