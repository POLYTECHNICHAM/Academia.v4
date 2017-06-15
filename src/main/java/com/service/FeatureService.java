package com.service;

import com.Entities.Feature;
import com.repository.FeatureRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class FeatureService {

    private FeatureRepository FeatureRepository;

    public Feature createFeature(Feature Feature){

        return FeatureRepository.save(Feature);
    }

    public Feature updateFeature(Feature Feature){

        return FeatureRepository.findOneById(Feature.getId());
    }

    public void deleteFeature(Feature Feature){

        FeatureRepository.delete(Feature);
    }
}
