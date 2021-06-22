#!/bin/bash
echo "## STARTING ALL SERVICES ##"

echo "Starting CLIENT deployment service..."
kubectl apply -f ./client/client-depl.yaml
echo "OK"
echo ""

echo "Starting CLIENT Node Port service..."
kubectl apply -f ./client/client-srv.yaml
echo "OK"
echo ""

echo "Starting POSTS deployment service..."
kubectl apply -f ./posts/posts-depl.yaml
echo "OK"
echo ""

echo "Starting POSTS Node Port service..."
kubectl apply -f ./posts/posts-srv.yaml
echo "OK"
echo ""

echo "Starting COMMENTS deployment service..."
kubectl apply -f ./comments/comments-depl.yaml
echo "OK"
echo ""

echo "Starting COMMENTS Node Port service..."
kubectl apply -f ./comments/comments-srv.yaml
echo "OK"
echo ""

echo "Starting QUERY deployment service..."
kubectl apply -f ./query/query-depl.yaml
echo "OK"
echo ""

echo "Starting QUERY Node Port service..."
kubectl apply -f ./query/query-srv.yaml
echo "OK"
echo ""

echo "Starting MODERATION deployment service..."
kubectl apply -f ./moderation/moderation-depl.yaml
echo "OK"
echo ""

echo "Starting EVENT-BUS deployment service..."
kubectl apply -f ./event_bus/event_bus-depl.yaml
echo "OK"
echo ""
