package com.ressource;


import com.Entities.Document;
import com.service.DocumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URISyntaxException;
import java.util.List;

//import org.springframework.security.access.annotation.Secured;

@RestController
public class DocumentResource {
  @Autowired
  private DocumentService documentService;

    @GetMapping("/documents")
    public List<Document> getDocument() {
        return documentService.getDocument();
    }

    @PostMapping("/documents")
    public Document postDocument(@PathVariable Document document) throws URISyntaxException {

        return documentService.postDocument(document);

    }


    @PutMapping("/documents")
    public ResponseEntity<Document> updateDocument(@PathVariable Document document) throws URISyntaxException {
        Document documentUpdate;
        documentUpdate=documentService.updateDocument(document);
        if(document==documentUpdate){
            return ResponseEntity.ok().body(documentUpdate);
        }else {
            return ResponseEntity.badRequest().body(null); //A changer, il faut créer divers réponses pas le temps
        }


    }


    @DeleteMapping("/documents/{id}")
    public void deleteDocument(@PathVariable Integer id) throws URISyntaxException {
        documentService.deleteDocument(id);
    }


}
