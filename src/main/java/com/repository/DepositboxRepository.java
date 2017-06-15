package com.repository;

import com.Entities.Depositbox;
import org.springframework.data.repository.CrudRepository;

public interface DepositboxRepository extends CrudRepository<Depositbox, Integer> {

    Depositbox findOneById(int id);


}
