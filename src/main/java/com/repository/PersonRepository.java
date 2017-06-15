package com.repository;

import com.Entities.Person;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PersonRepository extends CrudRepository<Person,Integer> {

  Person findOneById(int id);
  Person findOneByLogin(String login);
  List<Person> findAllByTypePersonLike(String typePerson);
  List<Person> findAllByLogin(String login);
  Person findOneByLastName(String lastName);
  @Query("SELECT COUNT(p) FROM Person p WHERE  p.login=:login")
  Long existByLogin(@Param("login") String login);
}
