package com.repository;

import com.Entities.Feature;
import org.springframework.data.repository.CrudRepository;

public interface FeatureRepository extends CrudRepository<Feature,Long> {

    Feature findOneById(int id);
}
