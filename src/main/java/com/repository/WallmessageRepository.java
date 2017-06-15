package com.repository;

import com.Entities.Wallmessage;
import org.springframework.data.repository.CrudRepository;
// CrudRepository = fait hériter un nombre de méthodes
// hsql = langage de requete
public interface WallmessageRepository extends CrudRepository<Wallmessage,Integer> {

  Wallmessage findOneById(int id);
}
