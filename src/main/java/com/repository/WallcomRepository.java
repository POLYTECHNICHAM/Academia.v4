package com.repository;

import com.Entities.Wallcom;
import org.springframework.data.repository.CrudRepository;

public interface WallcomRepository extends CrudRepository<Wallcom,Long> {

    Wallcom findOneById(int id);
}
