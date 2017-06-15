package com.service;

import com.Entities.Document;
import com.repository.DocumentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;


@Service
@Transactional
public class DocumentService {
    @Autowired
    private DocumentRepository documentRepository;

    public List<Document> getDocument()
    {
      List<Document> documetsList = new ArrayList<>();
      documentRepository.findAll().forEach(documetsList::add);
      return documetsList;
    }

    public Document postDocument(Document Document){

        return documentRepository.save(Document);
    }

    public Document updateDocument(Document Document){

        return documentRepository.findOneById(Document.getId());
    }

    public void deleteDocument(Integer id){

      documentRepository.delete(id);
    }
}
