package com.repository;

import com.Entities.Document;
import org.springframework.data.repository.CrudRepository;

public interface DocumentRepository extends CrudRepository<Document, Integer> {

    Document findOneById(int id);

}
