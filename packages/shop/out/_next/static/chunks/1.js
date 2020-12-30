(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "../../node_modules/@apollo/react-ssr/lib/react-ssr.esm.js":
/*!************************************************************************************************************************************************!*\
  !*** E:/satiwan/Project_Pick_bazar/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/@apollo/react-ssr/lib/react-ssr.esm.js ***!
  \************************************************************************************************************************************************/
/*! exports provided: getDataFromTree, getMarkupFromTree, renderToStringWithData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataFromTree", function() { return getDataFromTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarkupFromTree", function() { return getMarkupFromTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderToStringWithData", function() { return renderToStringWithData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-common */ "../../node_modules/@apollo/react-common/lib/react-common.esm.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "../../node_modules/@apollo/react-ssr/node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");





function getDataFromTree(tree, context) {
    if (context === void 0) { context = {}; }
    return getMarkupFromTree({
        tree: tree,
        context: context,
        renderFunction: __webpack_require__(/*! react-dom/server */ "../../node_modules/react-dom/server.browser.js").renderToStaticMarkup
    });
}
function getMarkupFromTree(_a) {
    var tree = _a.tree, _b = _a.context, context = _b === void 0 ? {} : _b, _c = _a.renderFunction, renderFunction = _c === void 0 ? __webpack_require__(/*! react-dom/server */ "../../node_modules/react-dom/server.browser.js").renderToStaticMarkup : _c;
    var renderPromises = new _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["RenderPromises"]();
    function process() {
        var ApolloContext = Object(_apollo_react_common__WEBPACK_IMPORTED_MODULE_2__["getApolloContext"])();
        var html = renderFunction(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ApolloContext.Provider, { value: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), { renderPromises: renderPromises }) }, tree));
        return renderPromises.hasPromises()
            ? renderPromises.consumeAndAwaitPromises().then(process)
            : html;
    }
    return Promise.resolve().then(process);
}

function renderToStringWithData(component) {
    return getMarkupFromTree({
        tree: component,
        renderFunction: __webpack_require__(/*! react-dom/server */ "../../node_modules/react-dom/server.browser.js").renderToString
    });
}


//# sourceMappingURL=react-ssr.esm.js.map


/***/ }),

/***/ "../../node_modules/@apollo/react-ssr/node_modules/@apollo/react-hooks/lib/react-hooks.esm.js":
/*!***********************************************************************************************************************************************************************************!*\
  !*** E:/satiwan/Project_Pick_bazar/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/@apollo/react-ssr/node_modules/@apollo/react-hooks/lib/react-hooks.esm.js ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: ApolloConsumer, ApolloProvider, getApolloContext, resetApolloContext, RenderPromises, useApolloClient, useLazyQuery, useMutation, useQuery, useSubscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPromises", function() { return RenderPromises; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useApolloClient", function() { return useApolloClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLazyQuery", function() { return useLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMutation", function() { return useMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return useQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSubscription", function() { return useSubscription; });
/* harmony import */ var _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/react-common */ "../../node_modules/@apollo/react-common/lib/react-common.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloConsumer", function() { return _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["ApolloConsumer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloProvider", function() { return _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["ApolloProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getApolloContext", function() { return _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["getApolloContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetApolloContext", function() { return _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["resetApolloContext"]; });

/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-client */ "../../node_modules/apollo-client/bundle.esm.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wry/equality */ "../../node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ts-invariant */ "../../node_modules/ts-invariant/lib/invariant.esm.js");








var OperationData = (function () {
    function OperationData(options, context) {
        this.isMounted = false;
        this.previousOptions = {};
        this.context = {};
        this.options = {};
        this.options = options || {};
        this.context = context || {};
    }
    OperationData.prototype.getOptions = function () {
        return this.options;
    };
    OperationData.prototype.setOptions = function (newOptions, storePrevious) {
        if (storePrevious === void 0) { storePrevious = false; }
        if (storePrevious && !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_4__["equal"])(this.options, newOptions)) {
            this.previousOptions = this.options;
        }
        this.options = newOptions;
    };
    OperationData.prototype.unmount = function () {
        this.isMounted = false;
    };
    OperationData.prototype.refreshClient = function () {
        var client = (this.options && this.options.client) ||
            (this.context && this.context.client);
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_5__["invariant"])(!!client, 'Could not find "client" in the context or passed in as an option. ' +
            'Wrap the root component in an <ApolloProvider>, or pass an ' +
            'ApolloClient instance in via options.');
        var isNew = false;
        if (client !== this.client) {
            isNew = true;
            this.client = client;
            this.cleanup();
        }
        return {
            client: this.client,
            isNew: isNew
        };
    };
    OperationData.prototype.verifyDocumentType = function (document, type) {
        var operation = Object(_apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["parser"])(document);
        var requiredOperationName = Object(_apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["operationName"])(type);
        var usedOperationName = Object(_apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["operationName"])(operation.type);
         false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_5__["invariant"])(operation.type === type, "Running a " + requiredOperationName + " requires a graphql " +
            (requiredOperationName + ", but a " + usedOperationName + " was used instead."));
    };
    return OperationData;
}());

var QueryData = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(QueryData, _super);
    function QueryData(_a) {
        var options = _a.options, context = _a.context, onNewData = _a.onNewData;
        var _this = _super.call(this, options, context) || this;
        _this.previousData = {};
        _this.currentObservable = {};
        _this.runLazy = false;
        _this.runLazyQuery = function (options) {
            _this.cleanup();
            _this.runLazy = true;
            _this.lazyOptions = options;
            _this.onNewData();
        };
        _this.getExecuteResult = function () {
            var result = _this.getQueryResult();
            _this.startQuerySubscription();
            return result;
        };
        _this.obsRefetch = function (variables) {
            return _this.currentObservable.query.refetch(variables);
        };
        _this.obsFetchMore = function (fetchMoreOptions) { return _this.currentObservable.query.fetchMore(fetchMoreOptions); };
        _this.obsUpdateQuery = function (mapFn) { return _this.currentObservable.query.updateQuery(mapFn); };
        _this.obsStartPolling = function (pollInterval) {
            _this.currentObservable &&
                _this.currentObservable.query &&
                _this.currentObservable.query.startPolling(pollInterval);
        };
        _this.obsStopPolling = function () {
            _this.currentObservable &&
                _this.currentObservable.query &&
                _this.currentObservable.query.stopPolling();
        };
        _this.obsSubscribeToMore = function (options) { return _this.currentObservable.query.subscribeToMore(options); };
        _this.onNewData = onNewData;
        return _this;
    }
    QueryData.prototype.execute = function () {
        this.refreshClient();
        var _a = this.getOptions(), skip = _a.skip, query = _a.query;
        if (skip || query !== this.previousData.query) {
            this.removeQuerySubscription();
            this.previousData.query = query;
        }
        this.updateObservableQuery();
        if (this.isMounted)
            this.startQuerySubscription();
        return this.getExecuteSsrResult() || this.getExecuteResult();
    };
    QueryData.prototype.executeLazy = function () {
        return !this.runLazy
            ? [
                this.runLazyQuery,
                {
                    loading: false,
                    networkStatus: apollo_client__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].ready,
                    called: false,
                    data: undefined,
                },
            ]
            : [this.runLazyQuery, this.execute()];
    };
    QueryData.prototype.fetchData = function () {
        var options = this.getOptions();
        if (options.skip || options.ssr === false)
            return false;
        var obs = this.currentObservable.query;
        var currentResult = obs.getCurrentResult();
        return currentResult.loading ? obs.result() : false;
    };
    QueryData.prototype.afterExecute = function (_a) {
        var _b = (_a === void 0 ? {} : _a).lazy, lazy = _b === void 0 ? false : _b;
        this.isMounted = true;
        if (!lazy || this.runLazy) {
            this.handleErrorOrCompleted();
        }
        this.previousOptions = this.getOptions();
        return this.unmount.bind(this);
    };
    QueryData.prototype.cleanup = function () {
        this.removeQuerySubscription();
        delete this.currentObservable.query;
        delete this.previousData.result;
    };
    QueryData.prototype.getOptions = function () {
        var options = _super.prototype.getOptions.call(this);
        if (this.lazyOptions) {
            options.variables = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, options.variables), this.lazyOptions.variables);
            options.context = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, options.context), this.lazyOptions.context);
        }
        if (this.runLazy) {
            delete options.skip;
        }
        return options;
    };
    QueryData.prototype.ssrInitiated = function () {
        return this.context && this.context.renderPromises;
    };
    QueryData.prototype.getExecuteSsrResult = function () {
        var ssrDisabled = this.getOptions().ssr === false;
        var fetchDisabled = this.refreshClient().client.disableNetworkFetches;
        var ssrLoading = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({ loading: true, networkStatus: apollo_client__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].loading, called: true, data: undefined, stale: false, client: this.client }, this.observableQueryFields());
        if (ssrDisabled && (this.ssrInitiated() || fetchDisabled)) {
            this.previousData.result = ssrLoading;
            return ssrLoading;
        }
        var result;
        if (this.ssrInitiated()) {
            result =
                this.context.renderPromises.addQueryPromise(this, this.getExecuteResult) || ssrLoading;
        }
        return result;
    };
    QueryData.prototype.prepareObservableQueryOptions = function () {
        var options = this.getOptions();
        this.verifyDocumentType(options.query, _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["DocumentType"].Query);
        var displayName = options.displayName || 'Query';
        if (this.ssrInitiated() &&
            (options.fetchPolicy === 'network-only' ||
                options.fetchPolicy === 'cache-and-network')) {
            options.fetchPolicy = 'cache-first';
        }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, options), { displayName: displayName, context: options.context, metadata: { reactComponent: { displayName: displayName } } });
    };
    QueryData.prototype.initializeObservableQuery = function () {
        var _a, _b;
        if (this.ssrInitiated()) {
            this.currentObservable.query = this.context.renderPromises.getSSRObservable(this.getOptions());
        }
        if (!this.currentObservable.query) {
            var observableQueryOptions = this.prepareObservableQueryOptions();
            this.previousData.observableQueryOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, observableQueryOptions), { children: null });
            this.currentObservable.query = this.refreshClient().client.watchQuery(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, observableQueryOptions));
            if (this.ssrInitiated()) {
                (_b = (_a = this.context) === null || _a === void 0 ? void 0 : _a.renderPromises) === null || _b === void 0 ? void 0 : _b.registerSSRObservable(this.currentObservable.query, observableQueryOptions);
            }
        }
    };
    QueryData.prototype.updateObservableQuery = function () {
        if (!this.currentObservable.query) {
            this.initializeObservableQuery();
            return;
        }
        var newObservableQueryOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, this.prepareObservableQueryOptions()), { children: null });
        if (!Object(_wry_equality__WEBPACK_IMPORTED_MODULE_4__["equal"])(newObservableQueryOptions, this.previousData.observableQueryOptions)) {
            this.previousData.observableQueryOptions = newObservableQueryOptions;
            this.currentObservable
                .query.setOptions(newObservableQueryOptions)
                .catch(function () { });
        }
    };
    QueryData.prototype.startQuerySubscription = function () {
        var _this = this;
        if (this.currentObservable.subscription || this.getOptions().skip)
            return;
        var obsQuery = this.currentObservable.query;
        this.currentObservable.subscription = obsQuery.subscribe({
            next: function (_a) {
                var loading = _a.loading, networkStatus = _a.networkStatus, data = _a.data;
                var previousResult = _this.previousData.result;
                if (previousResult &&
                    previousResult.loading === loading &&
                    previousResult.networkStatus === networkStatus &&
                    Object(_wry_equality__WEBPACK_IMPORTED_MODULE_4__["equal"])(previousResult.data, data)) {
                    return;
                }
                _this.onNewData();
            },
            error: function (error) {
                _this.resubscribeToQuery();
                if (!error.hasOwnProperty('graphQLErrors'))
                    throw error;
                var previousResult = _this.previousData.result;
                if ((previousResult && previousResult.loading) ||
                    !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_4__["equal"])(error, _this.previousData.error)) {
                    _this.previousData.error = error;
                    _this.onNewData();
                }
            },
        });
    };
    QueryData.prototype.resubscribeToQuery = function () {
        this.removeQuerySubscription();
        var lastError = this.currentObservable.query.getLastError();
        var lastResult = this.currentObservable.query.getLastResult();
        this.currentObservable.query.resetLastResults();
        this.startQuerySubscription();
        Object.assign(this.currentObservable.query, {
            lastError: lastError,
            lastResult: lastResult,
        });
    };
    QueryData.prototype.getQueryResult = function () {
        var result = this.observableQueryFields();
        var options = this.getOptions();
        if (options.skip) {
            result = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, result), { data: undefined, error: undefined, loading: false, called: true });
        }
        else {
            var currentResult = this.currentObservable.query.getCurrentResult();
            var loading = currentResult.loading, partial = currentResult.partial, networkStatus = currentResult.networkStatus, errors = currentResult.errors;
            var error = currentResult.error, data = currentResult.data;
            if (errors && errors.length > 0) {
                error = new apollo_client__WEBPACK_IMPORTED_MODULE_3__["ApolloError"]({ graphQLErrors: errors });
            }
            result = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, result), { loading: loading,
                networkStatus: networkStatus,
                error: error, called: true });
            if (loading) {
                var previousData = this.previousData.result && this.previousData.result.data;
                result.data =
                    previousData && data
                        ? Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, previousData), data) : previousData || data;
            }
            else if (error) {
                Object.assign(result, {
                    data: (this.currentObservable.query.getLastResult() || {})
                        .data,
                });
            }
            else {
                var fetchPolicy = this.currentObservable.query.options.fetchPolicy;
                var partialRefetch = options.partialRefetch;
                if (partialRefetch &&
                    !data &&
                    partial &&
                    fetchPolicy !== 'cache-only') {
                    Object.assign(result, {
                        loading: true,
                        networkStatus: apollo_client__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].loading,
                    });
                    result.refetch();
                    return result;
                }
                result.data = data;
            }
        }
        result.client = this.client;
        this.previousData.loading =
            (this.previousData.result && this.previousData.result.loading) || false;
        this.previousData.result = result;
        this.currentObservable.query &&
            this.currentObservable.query.resetQueryStoreErrors();
        return result;
    };
    QueryData.prototype.handleErrorOrCompleted = function () {
        var obsQuery = this.currentObservable.query;
        if (!obsQuery || !this.previousData.result)
            return;
        var _a = this.previousData.result, data = _a.data, loading = _a.loading, error = _a.error;
        if (!loading) {
            var _b = this.getOptions(), query = _b.query, variables = _b.variables, onCompleted = _b.onCompleted, onError = _b.onError;
            if (this.previousOptions &&
                !this.previousData.loading &&
                Object(_wry_equality__WEBPACK_IMPORTED_MODULE_4__["equal"])(this.previousOptions.query, query) &&
                Object(_wry_equality__WEBPACK_IMPORTED_MODULE_4__["equal"])(this.previousOptions.variables, variables)) {
                return;
            }
            if (onCompleted && !error) {
                onCompleted(data);
            }
            else if (onError && error) {
                onError(error);
            }
        }
    };
    QueryData.prototype.removeQuerySubscription = function () {
        if (this.currentObservable.subscription) {
            this.currentObservable.subscription.unsubscribe();
            delete this.currentObservable.subscription;
        }
    };
    QueryData.prototype.observableQueryFields = function () {
        var observable = this.currentObservable.query;
        return {
            variables: observable.variables,
            refetch: this.obsRefetch,
            fetchMore: this.obsFetchMore,
            updateQuery: this.obsUpdateQuery,
            startPolling: this.obsStartPolling,
            stopPolling: this.obsStopPolling,
            subscribeToMore: this.obsSubscribeToMore,
        };
    };
    return QueryData;
}(OperationData));

function useDeepMemo(memoFn, key) {
    var ref = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
    if (!ref.current || !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_4__["equal"])(key, ref.current.key)) {
        ref.current = { key: key, value: memoFn() };
    }
    return ref.current.value;
}

function useBaseQuery(query, options, lazy) {
    if (lazy === void 0) { lazy = false; }
    var context = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(Object(_apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["getApolloContext"])());
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(function (x) { return x + 1; }, 0), tick = _a[0], forceUpdate = _a[1];
    var updatedOptions = options ? Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, options), { query: query }) : { query: query };
    var queryDataRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
    var queryData = queryDataRef.current ||
        new QueryData({
            options: updatedOptions,
            context: context,
            onNewData: function () {
                if (!queryData.ssrInitiated()) {
                    Promise.resolve().then(forceUpdate);
                }
                else {
                    forceUpdate();
                }
            },
        });
    queryData.setOptions(updatedOptions);
    queryData.context = context;
    if (queryData.ssrInitiated() && !queryDataRef.current) {
        queryDataRef.current = queryData;
    }
    var memo = {
        options: Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, updatedOptions), { onError: undefined, onCompleted: undefined }),
        context: context,
        tick: tick,
    };
    var result = useDeepMemo(function () { return (lazy ? queryData.executeLazy() : queryData.execute()); }, memo);
    var queryResult = lazy
        ? result[1]
        : result;
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
        if (!queryDataRef.current) {
            queryDataRef.current = queryData;
        }
        return function () { return queryData.cleanup(); };
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () { return queryData.afterExecute({ lazy: lazy }); }, [
        queryResult.loading,
        queryResult.networkStatus,
        queryResult.error,
        queryResult.data,
    ]);
    return result;
}

function useQuery(query, options) {
    return useBaseQuery(query, options, false);
}

function useLazyQuery(query, options) {
    return useBaseQuery(query, options, true);
}

var MutationData = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(MutationData, _super);
    function MutationData(_a) {
        var options = _a.options, context = _a.context, result = _a.result, setResult = _a.setResult;
        var _this = _super.call(this, options, context) || this;
        _this.runMutation = function (mutationFunctionOptions) {
            if (mutationFunctionOptions === void 0) { mutationFunctionOptions = {}; }
            _this.onMutationStart();
            var mutationId = _this.generateNewMutationId();
            return _this.mutate(mutationFunctionOptions)
                .then(function (response) {
                _this.onMutationCompleted(response, mutationId);
                return response;
            })
                .catch(function (error) {
                _this.onMutationError(error, mutationId);
                if (!_this.getOptions().onError)
                    throw error;
            });
        };
        _this.verifyDocumentType(options.mutation, _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["DocumentType"].Mutation);
        _this.result = result;
        _this.setResult = setResult;
        _this.mostRecentMutationId = 0;
        return _this;
    }
    MutationData.prototype.execute = function (result) {
        this.isMounted = true;
        this.verifyDocumentType(this.getOptions().mutation, _apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["DocumentType"].Mutation);
        result.client = this.refreshClient().client;
        return [this.runMutation, result];
    };
    MutationData.prototype.afterExecute = function () {
        this.isMounted = true;
        return this.unmount.bind(this);
    };
    MutationData.prototype.cleanup = function () {
    };
    MutationData.prototype.mutate = function (mutationFunctionOptions) {
        var _a = this.getOptions(), mutation = _a.mutation, variables = _a.variables, optimisticResponse = _a.optimisticResponse, update = _a.update, _b = _a.context, mutationContext = _b === void 0 ? {} : _b, _c = _a.awaitRefetchQueries, awaitRefetchQueries = _c === void 0 ? false : _c, fetchPolicy = _a.fetchPolicy;
        var mutateOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, mutationFunctionOptions);
        var mutateVariables = Object.assign({}, variables, mutateOptions.variables);
        delete mutateOptions.variables;
        return this.refreshClient().client.mutate(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({ mutation: mutation,
            optimisticResponse: optimisticResponse, refetchQueries: mutateOptions.refetchQueries || this.getOptions().refetchQueries, awaitRefetchQueries: awaitRefetchQueries,
            update: update, context: mutationContext, fetchPolicy: fetchPolicy, variables: mutateVariables }, mutateOptions));
    };
    MutationData.prototype.onMutationStart = function () {
        if (!this.result.loading && !this.getOptions().ignoreResults) {
            this.updateResult({
                loading: true,
                error: undefined,
                data: undefined,
                called: true
            });
        }
    };
    MutationData.prototype.onMutationCompleted = function (response, mutationId) {
        var _a = this.getOptions(), onCompleted = _a.onCompleted, ignoreResults = _a.ignoreResults;
        var data = response.data, errors = response.errors;
        var error = errors && errors.length > 0
            ? new apollo_client__WEBPACK_IMPORTED_MODULE_3__["ApolloError"]({ graphQLErrors: errors })
            : undefined;
        var callOncomplete = function () {
            return onCompleted ? onCompleted(data) : null;
        };
        if (this.isMostRecentMutation(mutationId) && !ignoreResults) {
            this.updateResult({
                called: true,
                loading: false,
                data: data,
                error: error
            });
        }
        callOncomplete();
    };
    MutationData.prototype.onMutationError = function (error, mutationId) {
        var onError = this.getOptions().onError;
        if (this.isMostRecentMutation(mutationId)) {
            this.updateResult({
                loading: false,
                error: error,
                data: undefined,
                called: true
            });
        }
        if (onError) {
            onError(error);
        }
    };
    MutationData.prototype.generateNewMutationId = function () {
        return ++this.mostRecentMutationId;
    };
    MutationData.prototype.isMostRecentMutation = function (mutationId) {
        return this.mostRecentMutationId === mutationId;
    };
    MutationData.prototype.updateResult = function (result) {
        if (this.isMounted &&
            (!this.previousResult || !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_4__["equal"])(this.previousResult, result))) {
            this.setResult(result);
            this.previousResult = result;
        }
    };
    return MutationData;
}(OperationData));

function useMutation(mutation, options) {
    var context = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(Object(_apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["getApolloContext"])());
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({ called: false, loading: false }), result = _a[0], setResult = _a[1];
    var updatedOptions = options ? Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, options), { mutation: mutation }) : { mutation: mutation };
    var mutationDataRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
    function getMutationDataRef() {
        if (!mutationDataRef.current) {
            mutationDataRef.current = new MutationData({
                options: updatedOptions,
                context: context,
                result: result,
                setResult: setResult
            });
        }
        return mutationDataRef.current;
    }
    var mutationData = getMutationDataRef();
    mutationData.setOptions(updatedOptions);
    mutationData.context = context;
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () { return mutationData.afterExecute(); });
    return mutationData.execute(result);
}

var SubscriptionData = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(SubscriptionData, _super);
    function SubscriptionData(_a) {
        var options = _a.options, context = _a.context, setResult = _a.setResult;
        var _this = _super.call(this, options, context) || this;
        _this.currentObservable = {};
        _this.setResult = setResult;
        _this.initialize(options);
        return _this;
    }
    SubscriptionData.prototype.execute = function (result) {
        if (this.getOptions().skip === true) {
            this.cleanup();
            return {
                loading: false,
                error: undefined,
                data: undefined,
                variables: this.getOptions().variables
            };
        }
        var currentResult = result;
        if (this.refreshClient().isNew) {
            currentResult = this.getLoadingResult();
        }
        var shouldResubscribe = this.getOptions().shouldResubscribe;
        if (typeof shouldResubscribe === 'function') {
            shouldResubscribe = !!shouldResubscribe(this.getOptions());
        }
        if (shouldResubscribe !== false &&
            this.previousOptions &&
            Object.keys(this.previousOptions).length > 0 &&
            (this.previousOptions.subscription !== this.getOptions().subscription ||
                !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_4__["equal"])(this.previousOptions.variables, this.getOptions().variables) ||
                this.previousOptions.skip !== this.getOptions().skip)) {
            this.cleanup();
            currentResult = this.getLoadingResult();
        }
        this.initialize(this.getOptions());
        this.startSubscription();
        this.previousOptions = this.getOptions();
        return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, currentResult), { variables: this.getOptions().variables });
    };
    SubscriptionData.prototype.afterExecute = function () {
        this.isMounted = true;
    };
    SubscriptionData.prototype.cleanup = function () {
        this.endSubscription();
        delete this.currentObservable.query;
    };
    SubscriptionData.prototype.initialize = function (options) {
        if (this.currentObservable.query || this.getOptions().skip === true)
            return;
        this.currentObservable.query = this.refreshClient().client.subscribe({
            query: options.subscription,
            variables: options.variables,
            fetchPolicy: options.fetchPolicy
        });
    };
    SubscriptionData.prototype.startSubscription = function () {
        if (this.currentObservable.subscription)
            return;
        this.currentObservable.subscription = this.currentObservable.query.subscribe({
            next: this.updateCurrentData.bind(this),
            error: this.updateError.bind(this),
            complete: this.completeSubscription.bind(this)
        });
    };
    SubscriptionData.prototype.getLoadingResult = function () {
        return {
            loading: true,
            error: undefined,
            data: undefined
        };
    };
    SubscriptionData.prototype.updateResult = function (result) {
        if (this.isMounted) {
            this.setResult(result);
        }
    };
    SubscriptionData.prototype.updateCurrentData = function (result) {
        var onSubscriptionData = this.getOptions().onSubscriptionData;
        this.updateResult({
            data: result.data,
            loading: false,
            error: undefined
        });
        if (onSubscriptionData) {
            onSubscriptionData({
                client: this.refreshClient().client,
                subscriptionData: result
            });
        }
    };
    SubscriptionData.prototype.updateError = function (error) {
        this.updateResult({
            error: error,
            loading: false
        });
    };
    SubscriptionData.prototype.completeSubscription = function () {
        var onSubscriptionComplete = this.getOptions().onSubscriptionComplete;
        if (onSubscriptionComplete)
            onSubscriptionComplete();
        this.endSubscription();
    };
    SubscriptionData.prototype.endSubscription = function () {
        if (this.currentObservable.subscription) {
            this.currentObservable.subscription.unsubscribe();
            delete this.currentObservable.subscription;
        }
    };
    return SubscriptionData;
}(OperationData));

function useSubscription(subscription, options) {
    var context = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(Object(_apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["getApolloContext"])());
    var updatedOptions = options
        ? Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, options), { subscription: subscription }) : { subscription: subscription };
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
        loading: !updatedOptions.skip,
        error: undefined,
        data: undefined
    }), result = _a[0], setResult = _a[1];
    var subscriptionDataRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
    function getSubscriptionDataRef() {
        if (!subscriptionDataRef.current) {
            subscriptionDataRef.current = new SubscriptionData({
                options: updatedOptions,
                context: context,
                setResult: setResult
            });
        }
        return subscriptionDataRef.current;
    }
    var subscriptionData = getSubscriptionDataRef();
    subscriptionData.setOptions(updatedOptions, true);
    subscriptionData.context = context;
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () { return subscriptionData.afterExecute(); });
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () { return subscriptionData.cleanup.bind(subscriptionData); }, []);
    return subscriptionData.execute(result);
}

function useApolloClient() {
    var client = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(Object(_apollo_react_common__WEBPACK_IMPORTED_MODULE_0__["getApolloContext"])()).client;
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_5__["invariant"])(client, 'No Apollo Client instance can be found. Please ensure that you ' +
        'have called `ApolloProvider` higher up in your tree.');
    return client;
}

function makeDefaultQueryInfo() {
    return {
        seen: false,
        observable: null
    };
}
var RenderPromises = (function () {
    function RenderPromises() {
        this.queryPromises = new Map();
        this.queryInfoTrie = new Map();
    }
    RenderPromises.prototype.registerSSRObservable = function (observable, props) {
        this.lookupQueryInfo(props).observable = observable;
    };
    RenderPromises.prototype.getSSRObservable = function (props) {
        return this.lookupQueryInfo(props).observable;
    };
    RenderPromises.prototype.addQueryPromise = function (queryInstance, finish) {
        var info = this.lookupQueryInfo(queryInstance.getOptions());
        if (!info.seen) {
            this.queryPromises.set(queryInstance.getOptions(), new Promise(function (resolve) {
                resolve(queryInstance.fetchData());
            }));
            return null;
        }
        return finish();
    };
    RenderPromises.prototype.hasPromises = function () {
        return this.queryPromises.size > 0;
    };
    RenderPromises.prototype.consumeAndAwaitPromises = function () {
        var _this = this;
        var promises = [];
        this.queryPromises.forEach(function (promise, queryInstance) {
            _this.lookupQueryInfo(queryInstance).seen = true;
            promises.push(promise);
        });
        this.queryPromises.clear();
        return Promise.all(promises);
    };
    RenderPromises.prototype.lookupQueryInfo = function (props) {
        var queryInfoTrie = this.queryInfoTrie;
        var query = props.query, variables = props.variables;
        var varMap = queryInfoTrie.get(query) || new Map();
        if (!queryInfoTrie.has(query))
            queryInfoTrie.set(query, varMap);
        var variablesString = JSON.stringify(variables);
        var info = varMap.get(variablesString) || makeDefaultQueryInfo();
        if (!varMap.has(variablesString))
            varMap.set(variablesString, info);
        return info;
    };
    return RenderPromises;
}());


//# sourceMappingURL=react-hooks.esm.js.map


/***/ }),

/***/ "../../node_modules/react-dom/cjs/react-dom-server.browser.development.js":
/*!***************************************************************************************************************************************************************!*\
  !*** E:/satiwan/Project_Pick_bazar/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/react-dom/cjs/react-dom-server.browser.development.js ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "../../node_modules/next/dist/build/polyfills/object-assign.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "../../node_modules/prop-types/checkPropTypes.js");

// Do not require this module directly! Use normal `invariant` calls with
// template literal strings. The messages will be replaced with error codes
// during build.
function formatProdErrorMessage(code) {
  var url = 'https://reactjs.org/docs/error-decoder.html?invariant=' + code;

  for (var i = 1; i < arguments.length; i++) {
    url += '&args[]=' + encodeURIComponent(arguments[i]);
  }

  return "Minified React error #" + code + "; visit " + url + " for the full message or " + 'use the non-minified dev environment for full errors and additional ' + 'helpful warnings.';
}

var ReactVersion = '16.13.1';

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED; // Prevent newer renderers from RTE when used with older react package versions.
// Current owner and dispatcher used to share the same ref,
// but PR #14548 split them out to better support the react-debug-tools package.

if (!ReactSharedInternals.hasOwnProperty('ReactCurrentDispatcher')) {
  ReactSharedInternals.ReactCurrentDispatcher = {
    current: null
  };
}

if (!ReactSharedInternals.hasOwnProperty('ReactCurrentBatchConfig')) {
  ReactSharedInternals.ReactCurrentBatchConfig = {
    suspense: null
  };
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

    if (!hasExistingStack) {
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      var stack = ReactDebugCurrentFrame.getStackAddendum();

      if (stack !== '') {
        format += '%s';
        args = args.concat([stack]);
      }
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  }
}

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;
function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}
function initializeLazyComponentType(lazyComponent) {
  if (lazyComponent._status === Uninitialized) {
    lazyComponent._status = Pending;
    var ctor = lazyComponent._ctor;
    var thenable = ctor();
    lazyComponent._result = thenable;
    thenable.then(function (moduleObject) {
      if (lazyComponent._status === Pending) {
        var defaultExport = moduleObject.default;

        {
          if (defaultExport === undefined) {
            error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + "const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
          }
        }

        lazyComponent._status = Resolved;
        lazyComponent._result = defaultExport;
      }
    }, function (error) {
      if (lazyComponent._status === Pending) {
        lazyComponent._status = Rejected;
        lazyComponent._result = error;
      }
    });
  }
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return "Profiler";

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';

      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type.render);

      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);

          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }

          break;
        }
    }
  }

  return null;
}

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
function describeComponentFrame (name, source, ownerName) {
  var sourceInfo = '';

  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');

    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);

        if (match) {
          var pathBeforeSlash = match[1];

          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }

    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }

  return '\n    in ' + (name || 'Unknown') + sourceInfo;
}

var enableSuspenseServerRenderer = false;

var enableDeprecatedFlareAPI = false; // Experimental Host Component support.

var ReactDebugCurrentFrame;
var didWarnAboutInvalidateContextType;

{
  ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
  didWarnAboutInvalidateContextType = new Set();
}

var emptyObject = {};

{
  Object.freeze(emptyObject);
}

function maskContext(type, context) {
  var contextTypes = type.contextTypes;

  if (!contextTypes) {
    return emptyObject;
  }

  var maskedContext = {};

  for (var contextName in contextTypes) {
    maskedContext[contextName] = context[contextName];
  }

  return maskedContext;
}

function checkContextTypes(typeSpecs, values, location) {
  {
    checkPropTypes(typeSpecs, values, location, 'Component', ReactDebugCurrentFrame.getCurrentStack);
  }
}

function validateContextBounds(context, threadID) {
  // If we don't have enough slots in this context to store this threadID,
  // fill it in without leaving any holes to ensure that the VM optimizes
  // this as non-holey index properties.
  // (Note: If `react` package is < 16.6, _threadCount is undefined.)
  for (var i = context._threadCount | 0; i <= threadID; i++) {
    // We assume that this is the same as the defaultValue which might not be
    // true if we're rendering inside a secondary renderer but they are
    // secondary because these use cases are very rare.
    context[i] = context._currentValue2;
    context._threadCount = i + 1;
  }
}
function processContext(type, context, threadID, isClass) {
  if (isClass) {
    var contextType = type.contextType;

    {
      if ('contextType' in type) {
        var isValid = // Allow null for conditional declaration
        contextType === null || contextType !== undefined && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === undefined; // Not a <Context.Consumer>

        if (!isValid && !didWarnAboutInvalidateContextType.has(type)) {
          didWarnAboutInvalidateContextType.add(type);
          var addendum = '';

          if (contextType === undefined) {
            addendum = ' However, it is set to undefined. ' + 'This can be caused by a typo or by mixing up named and default imports. ' + 'This can also happen due to a circular dependency, so ' + 'try moving the createContext() call to a separate file.';
          } else if (typeof contextType !== 'object') {
            addendum = ' However, it is set to a ' + typeof contextType + '.';
          } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
            addendum = ' Did you accidentally pass the Context.Provider instead?';
          } else if (contextType._context !== undefined) {
            // <Context.Consumer>
            addendum = ' Did you accidentally pass the Context.Consumer instead?';
          } else {
            addendum = ' However, it is set to an object with keys {' + Object.keys(contextType).join(', ') + '}.';
          }

          error('%s defines an invalid contextType. ' + 'contextType should point to the Context object returned by React.createContext().%s', getComponentName(type) || 'Component', addendum);
        }
      }
    }

    if (typeof contextType === 'object' && contextType !== null) {
      validateContextBounds(contextType, threadID);
      return contextType[threadID];
    }

    {
      var maskedContext = maskContext(type, context);

      {
        if (type.contextTypes) {
          checkContextTypes(type.contextTypes, maskedContext, 'context');
        }
      }

      return maskedContext;
    }
  } else {
    {
      var _maskedContext = maskContext(type, context);

      {
        if (type.contextTypes) {
          checkContextTypes(type.contextTypes, _maskedContext, 'context');
        }
      }

      return _maskedContext;
    }
  }
}

var nextAvailableThreadIDs = new Uint16Array(16);

for (var i = 0; i < 15; i++) {
  nextAvailableThreadIDs[i] = i + 1;
}

nextAvailableThreadIDs[15] = 0;

function growThreadCountAndReturnNextAvailable() {
  var oldArray = nextAvailableThreadIDs;
  var oldSize = oldArray.length;
  var newSize = oldSize * 2;

  if (!(newSize <= 0x10000)) {
    {
      throw Error( "Maximum number of concurrent React renderers exceeded. This can happen if you are not properly destroying the Readable provided by React. Ensure that you call .destroy() on it if you no longer want to read from it, and did not read to the end. If you use .pipe() this should be automatic." );
    }
  }

  var newArray = new Uint16Array(newSize);
  newArray.set(oldArray);
  nextAvailableThreadIDs = newArray;
  nextAvailableThreadIDs[0] = oldSize + 1;

  for (var _i = oldSize; _i < newSize - 1; _i++) {
    nextAvailableThreadIDs[_i] = _i + 1;
  }

  nextAvailableThreadIDs[newSize - 1] = 0;
  return oldSize;
}

function allocThreadID() {
  var nextID = nextAvailableThreadIDs[0];

  if (nextID === 0) {
    return growThreadCountAndReturnNextAvailable();
  }

  nextAvailableThreadIDs[0] = nextAvailableThreadIDs[nextID];
  return nextID;
}
function freeThreadID(id) {
  nextAvailableThreadIDs[id] = nextAvailableThreadIDs[0];
  nextAvailableThreadIDs[0] = id;
}

// A reserved attribute.
// It is handled by React separately and shouldn't be written to the DOM.
var RESERVED = 0; // A simple string attribute.
// Attributes that aren't in the whitelist are presumed to have this type.

var STRING = 1; // A string attribute that accepts booleans in React. In HTML, these are called
// "enumerated" attributes with "true" and "false" as possible values.
// When true, it should be set to a "true" string.
// When false, it should be set to a "false" string.

var BOOLEANISH_STRING = 2; // A real boolean attribute.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.

var BOOLEAN = 3; // An attribute that can be used as a flag as well as with a value.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
// For any other value, should be present with that value.

var OVERLOADED_BOOLEAN = 4; // An attribute that must be numeric or parse as a numeric.
// When falsy, it should be removed.

var NUMERIC = 5; // An attribute that must be positive numeric or parse as a positive numeric.
// When falsy, it should be removed.

var POSITIVE_NUMERIC = 6;

/* eslint-disable max-len */
var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
/* eslint-enable max-len */

var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
var ROOT_ATTRIBUTE_NAME = 'data-reactroot';
var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + ATTRIBUTE_NAME_START_CHAR + '][' + ATTRIBUTE_NAME_CHAR + ']*$');
var hasOwnProperty = Object.prototype.hasOwnProperty;
var illegalAttributeNameCache = {};
var validatedAttributeNameCache = {};
function isAttributeNameSafe(attributeName) {
  if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) {
    return true;
  }

  if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) {
    return false;
  }

  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
    validatedAttributeNameCache[attributeName] = true;
    return true;
  }

  illegalAttributeNameCache[attributeName] = true;

  {
    error('Invalid attribute name: `%s`', attributeName);
  }

  return false;
}
function shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag) {
  if (propertyInfo !== null) {
    return propertyInfo.type === RESERVED;
  }

  if (isCustomComponentTag) {
    return false;
  }

  if (name.length > 2 && (name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
    return true;
  }

  return false;
}
function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
  if (propertyInfo !== null && propertyInfo.type === RESERVED) {
    return false;
  }

  switch (typeof value) {
    case 'function': // $FlowIssue symbol is perfectly valid here

    case 'symbol':
      // eslint-disable-line
      return true;

    case 'boolean':
      {
        if (isCustomComponentTag) {
          return false;
        }

        if (propertyInfo !== null) {
          return !propertyInfo.acceptsBooleans;
        } else {
          var prefix = name.toLowerCase().slice(0, 5);
          return prefix !== 'data-' && prefix !== 'aria-';
        }
      }

    default:
      return false;
  }
}
function shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag) {
  if (value === null || typeof value === 'undefined') {
    return true;
  }

  if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag)) {
    return true;
  }

  if (isCustomComponentTag) {
    return false;
  }

  if (propertyInfo !== null) {
    switch (propertyInfo.type) {
      case BOOLEAN:
        return !value;

      case OVERLOADED_BOOLEAN:
        return value === false;

      case NUMERIC:
        return isNaN(value);

      case POSITIVE_NUMERIC:
        return isNaN(value) || value < 1;
    }
  }

  return false;
}
function getPropertyInfo(name) {
  return properties.hasOwnProperty(name) ? properties[name] : null;
}

function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL) {
  this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
  this.attributeName = attributeName;
  this.attributeNamespace = attributeNamespace;
  this.mustUseProperty = mustUseProperty;
  this.propertyName = name;
  this.type = type;
  this.sanitizeURL = sanitizeURL;
} // When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.


var properties = {}; // These props are reserved by React. They shouldn't be written to the DOM.

var reservedProps = ['children', 'dangerouslySetInnerHTML', // TODO: This prevents the assignment of defaultValue to regular
// elements (not just inputs). Now that ReactDOMInput assigns to the
// defaultValue property -- do we need this?
'defaultValue', 'defaultChecked', 'innerHTML', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'style'];

reservedProps.forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, RESERVED, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false);
}); // A few React string attributes have a different name.
// This is a mapping from React prop names to the attribute names.

[['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEquiv', 'http-equiv']].forEach(function (_ref) {
  var name = _ref[0],
      attributeName = _ref[1];
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, // attributeName
  null, // attributeNamespace
  false);
}); // These are "enumerated" HTML attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).

['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false);
}); // These are "enumerated" SVG attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.

['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false);
}); // These are HTML boolean attributes.

['allowFullScreen', 'async', // Note: there is a special case that prevents it from being written to the DOM
// on the client side because the browsers are inconsistent. Instead we call focus().
'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'disablePictureInPicture', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless', // Microdata
'itemScope'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false);
}); // These are the few React props that we set as DOM properties
// rather than attributes. These are all booleans.

['checked', // Note: `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`. We have special logic for handling this.
'multiple', 'muted', 'selected' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false);
}); // These are HTML attributes that are "overloaded booleans": they behave like
// booleans, but can also accept a string value.

['capture', 'download' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false);
}); // These are HTML attributes that must be positive numbers.

['cols', 'rows', 'size', 'span' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false);
}); // These are HTML attributes that must be numbers.

['rowSpan', 'start'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, NUMERIC, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false);
});
var CAMELIZE = /[\-\:]([a-z])/g;

var capitalize = function (token) {
  return token[1].toUpperCase();
}; // This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML whitelist.
// Some of these attributes can be hard to find. This list was created by
// scraping the MDN documentation.


['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'xmlns:xlink', 'x-height' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, null, // attributeNamespace
  false);
}); // String SVG attributes with the xlink namespace.

['xlink:actuate', 'xlink:arcrole', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/1999/xlink', false);
}); // String SVG attributes with the xml namespace.

['xml:base', 'xml:lang', 'xml:space' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/XML/1998/namespace', false);
}); // These attribute exists both in HTML and SVG.
// The attribute name is case-sensitive in SVG so we can't just use
// the React name like we do for attributes that exist only in HTML.

['tabIndex', 'crossOrigin'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  false);
}); // These attributes accept URLs. These must not allow javascript: URLS.
// These will also need to accept Trusted Types object in the future.

var xlinkHref = 'xlinkHref';
properties[xlinkHref] = new PropertyInfoRecord('xlinkHref', STRING, false, // mustUseProperty
'xlink:href', 'http://www.w3.org/1999/xlink', true);
['src', 'href', 'action', 'formAction'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  true);
});

var ReactDebugCurrentFrame$1 = null;

{
  ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
} // A javascript: URL can contain leading C0 control or \u0020 SPACE,
// and any newline or tab are filtered out as if they're not part of the URL.
// https://url.spec.whatwg.org/#url-parsing
// Tab or newline are defined as \r\n\t:
// https://infra.spec.whatwg.org/#ascii-tab-or-newline
// A C0 control is a code point in the range \u0000 NULL to \u001F
// INFORMATION SEPARATOR ONE, inclusive:
// https://infra.spec.whatwg.org/#c0-control-or-space

/* eslint-disable max-len */


var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
var didWarn = false;

function sanitizeURL(url) {
  {
    if (!didWarn && isJavaScriptProtocol.test(url)) {
      didWarn = true;

      error('A future version of React will block javascript: URLs as a security precaution. ' + 'Use event handlers instead if you can. If you need to generate unsafe HTML try ' + 'using dangerouslySetInnerHTML instead. React was passed %s.', JSON.stringify(url));
    }
  }
}

// code copied and modified from escape-html

/**
 * Module variables.
 * @private
 */
var matchHtmlRegExp = /["'&<>]/;
/**
 * Escapes special characters and HTML entities in a given html string.
 *
 * @param  {string} string HTML string to escape for later insertion
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = '';
  var index;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        // "
        escape = '&quot;';
        break;

      case 38:
        // &
        escape = '&amp;';
        break;

      case 39:
        // '
        escape = '&#x27;'; // modified from escape-html; used to be '&#39'

        break;

      case 60:
        // <
        escape = '&lt;';
        break;

      case 62:
        // >
        escape = '&gt;';
        break;

      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
} // end code copied and modified from escape-html

/**
 * Escapes text to prevent scripting attacks.
 *
 * @param {*} text Text value to escape.
 * @return {string} An escaped string.
 */


function escapeTextForBrowser(text) {
  if (typeof text === 'boolean' || typeof text === 'number') {
    // this shortcircuit helps perf for types that we know will never have
    // special characters, especially given that this function is used often
    // for numeric dom ids.
    return '' + text;
  }

  return escapeHtml(text);
}

/**
 * Escapes attribute value to prevent scripting attacks.
 *
 * @param {*} value Value to escape.
 * @return {string} An escaped string.
 */

function quoteAttributeValueForBrowser(value) {
  return '"' + escapeTextForBrowser(value) + '"';
}

function createMarkupForRoot() {
  return ROOT_ATTRIBUTE_NAME + '=""';
}
/**
 * Creates markup for a property.
 *
 * @param {string} name
 * @param {*} value
 * @return {?string} Markup string, or null if the property was invalid.
 */

function createMarkupForProperty(name, value) {
  var propertyInfo = getPropertyInfo(name);

  if (name !== 'style' && shouldIgnoreAttribute(name, propertyInfo, false)) {
    return '';
  }

  if (shouldRemoveAttribute(name, value, propertyInfo, false)) {
    return '';
  }

  if (propertyInfo !== null) {
    var attributeName = propertyInfo.attributeName;
    var type = propertyInfo.type;

    if (type === BOOLEAN || type === OVERLOADED_BOOLEAN && value === true) {
      return attributeName + '=""';
    } else {
      if (propertyInfo.sanitizeURL) {
        value = '' + value;
        sanitizeURL(value);
      }

      return attributeName + '=' + quoteAttributeValueForBrowser(value);
    }
  } else if (isAttributeNameSafe(name)) {
    return name + '=' + quoteAttributeValueForBrowser(value);
  }

  return '';
}
/**
 * Creates markup for a custom property.
 *
 * @param {string} name
 * @param {*} value
 * @return {string} Markup string, or empty string if the property was invalid.
 */

function createMarkupForCustomAttribute(name, value) {
  if (!isAttributeNameSafe(name) || value == null) {
    return '';
  }

  return name + '=' + quoteAttributeValueForBrowser(value);
}

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

var objectIs = typeof Object.is === 'function' ? Object.is : is;

var currentlyRenderingComponent = null;
var firstWorkInProgressHook = null;
var workInProgressHook = null; // Whether the work-in-progress hook is a re-rendered hook

var isReRender = false; // Whether an update was scheduled during the currently executing render pass.

var didScheduleRenderPhaseUpdate = false; // Lazily created map of render-phase updates

var renderPhaseUpdates = null; // Counter to prevent infinite loops.

var numberOfReRenders = 0;
var RE_RENDER_LIMIT = 25;
var isInHookUserCodeInDev = false; // In DEV, this is the name of the currently executing primitive hook

var currentHookNameInDev;

function resolveCurrentlyRenderingComponent() {
  if (!(currentlyRenderingComponent !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  {
    if (isInHookUserCodeInDev) {
      error('Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. ' + 'You can only call Hooks at the top level of your React function. ' + 'For more information, see ' + 'https://fb.me/rules-of-hooks');
    }
  }

  return currentlyRenderingComponent;
}

function areHookInputsEqual(nextDeps, prevDeps) {
  if (prevDeps === null) {
    {
      error('%s received a final argument during this render, but not during ' + 'the previous render. Even though the final argument is optional, ' + 'its type cannot change between renders.', currentHookNameInDev);
    }

    return false;
  }

  {
    // Don't bother comparing lengths in prod because these arrays should be
    // passed inline.
    if (nextDeps.length !== prevDeps.length) {
      error('The final argument passed to %s changed size between renders. The ' + 'order and size of this array must remain constant.\n\n' + 'Previous: %s\n' + 'Incoming: %s', currentHookNameInDev, "[" + nextDeps.join(', ') + "]", "[" + prevDeps.join(', ') + "]");
    }
  }

  for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
    if (objectIs(nextDeps[i], prevDeps[i])) {
      continue;
    }

    return false;
  }

  return true;
}

function createHook() {
  if (numberOfReRenders > 0) {
    {
      {
        throw Error( "Rendered more hooks than during the previous render" );
      }
    }
  }

  return {
    memoizedState: null,
    queue: null,
    next: null
  };
}

function createWorkInProgressHook() {
  if (workInProgressHook === null) {
    // This is the first hook in the list
    if (firstWorkInProgressHook === null) {
      isReRender = false;
      firstWorkInProgressHook = workInProgressHook = createHook();
    } else {
      // There's already a work-in-progress. Reuse it.
      isReRender = true;
      workInProgressHook = firstWorkInProgressHook;
    }
  } else {
    if (workInProgressHook.next === null) {
      isReRender = false; // Append to the end of the list

      workInProgressHook = workInProgressHook.next = createHook();
    } else {
      // There's already a work-in-progress. Reuse it.
      isReRender = true;
      workInProgressHook = workInProgressHook.next;
    }
  }

  return workInProgressHook;
}

function prepareToUseHooks(componentIdentity) {
  currentlyRenderingComponent = componentIdentity;

  {
    isInHookUserCodeInDev = false;
  } // The following should have already been reset
  // didScheduleRenderPhaseUpdate = false;
  // firstWorkInProgressHook = null;
  // numberOfReRenders = 0;
  // renderPhaseUpdates = null;
  // workInProgressHook = null;

}
function finishHooks(Component, props, children, refOrContext) {
  // This must be called after every function component to prevent hooks from
  // being used in classes.
  while (didScheduleRenderPhaseUpdate) {
    // Updates were scheduled during the render phase. They are stored in
    // the `renderPhaseUpdates` map. Call the component again, reusing the
    // work-in-progress hooks and applying the additional updates on top. Keep
    // restarting until no more updates are scheduled.
    didScheduleRenderPhaseUpdate = false;
    numberOfReRenders += 1; // Start over from the beginning of the list

    workInProgressHook = null;
    children = Component(props, refOrContext);
  }

  currentlyRenderingComponent = null;
  firstWorkInProgressHook = null;
  numberOfReRenders = 0;
  renderPhaseUpdates = null;
  workInProgressHook = null;

  {
    isInHookUserCodeInDev = false;
  } // These were reset above
  // currentlyRenderingComponent = null;
  // didScheduleRenderPhaseUpdate = false;
  // firstWorkInProgressHook = null;
  // numberOfReRenders = 0;
  // renderPhaseUpdates = null;
  // workInProgressHook = null;


  return children;
}

function readContext(context, observedBits) {
  var threadID = currentThreadID;
  validateContextBounds(context, threadID);

  {
    if (isInHookUserCodeInDev) {
      error('Context can only be read while React is rendering. ' + 'In classes, you can read it in the render method or getDerivedStateFromProps. ' + 'In function components, you can read it directly in the function body, but not ' + 'inside Hooks like useReducer() or useMemo().');
    }
  }

  return context[threadID];
}

function useContext(context, observedBits) {
  {
    currentHookNameInDev = 'useContext';
  }

  resolveCurrentlyRenderingComponent();
  var threadID = currentThreadID;
  validateContextBounds(context, threadID);
  return context[threadID];
}

function basicStateReducer(state, action) {
  // $FlowFixMe: Flow doesn't like mixed types
  return typeof action === 'function' ? action(state) : action;
}

function useState(initialState) {
  {
    currentHookNameInDev = 'useState';
  }

  return useReducer(basicStateReducer, // useReducer has a special case to support lazy useState initializers
  initialState);
}
function useReducer(reducer, initialArg, init) {
  {
    if (reducer !== basicStateReducer) {
      currentHookNameInDev = 'useReducer';
    }
  }

  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();

  if (isReRender) {
    // This is a re-render. Apply the new render phase updates to the previous
    // current hook.
    var queue = workInProgressHook.queue;
    var dispatch = queue.dispatch;

    if (renderPhaseUpdates !== null) {
      // Render phase updates are stored in a map of queue -> linked list
      var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);

      if (firstRenderPhaseUpdate !== undefined) {
        renderPhaseUpdates.delete(queue);
        var newState = workInProgressHook.memoizedState;
        var update = firstRenderPhaseUpdate;

        do {
          // Process this render phase update. We don't have to check the
          // priority because it will always be the same as the current
          // render's.
          var action = update.action;

          {
            isInHookUserCodeInDev = true;
          }

          newState = reducer(newState, action);

          {
            isInHookUserCodeInDev = false;
          }

          update = update.next;
        } while (update !== null);

        workInProgressHook.memoizedState = newState;
        return [newState, dispatch];
      }
    }

    return [workInProgressHook.memoizedState, dispatch];
  } else {
    {
      isInHookUserCodeInDev = true;
    }

    var initialState;

    if (reducer === basicStateReducer) {
      // Special case for `useState`.
      initialState = typeof initialArg === 'function' ? initialArg() : initialArg;
    } else {
      initialState = init !== undefined ? init(initialArg) : initialArg;
    }

    {
      isInHookUserCodeInDev = false;
    }

    workInProgressHook.memoizedState = initialState;

    var _queue = workInProgressHook.queue = {
      last: null,
      dispatch: null
    };

    var _dispatch = _queue.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, _queue);

    return [workInProgressHook.memoizedState, _dispatch];
  }
}

function useMemo(nextCreate, deps) {
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();
  var nextDeps = deps === undefined ? null : deps;

  if (workInProgressHook !== null) {
    var prevState = workInProgressHook.memoizedState;

    if (prevState !== null) {
      if (nextDeps !== null) {
        var prevDeps = prevState[1];

        if (areHookInputsEqual(nextDeps, prevDeps)) {
          return prevState[0];
        }
      }
    }
  }

  {
    isInHookUserCodeInDev = true;
  }

  var nextValue = nextCreate();

  {
    isInHookUserCodeInDev = false;
  }

  workInProgressHook.memoizedState = [nextValue, nextDeps];
  return nextValue;
}

function useRef(initialValue) {
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();
  var previousRef = workInProgressHook.memoizedState;

  if (previousRef === null) {
    var ref = {
      current: initialValue
    };

    {
      Object.seal(ref);
    }

    workInProgressHook.memoizedState = ref;
    return ref;
  } else {
    return previousRef;
  }
}

function useLayoutEffect(create, inputs) {
  {
    currentHookNameInDev = 'useLayoutEffect';

    error('useLayoutEffect does nothing on the server, because its effect cannot ' + "be encoded into the server renderer's output format. This will lead " + 'to a mismatch between the initial, non-hydrated UI and the intended ' + 'UI. To avoid this, useLayoutEffect should only be used in ' + 'components that render exclusively on the client. ' + 'See https://fb.me/react-uselayouteffect-ssr for common fixes.');
  }
}

function dispatchAction(componentIdentity, queue, action) {
  if (!(numberOfReRenders < RE_RENDER_LIMIT)) {
    {
      throw Error( "Too many re-renders. React limits the number of renders to prevent an infinite loop." );
    }
  }

  if (componentIdentity === currentlyRenderingComponent) {
    // This is a render phase update. Stash it in a lazily-created map of
    // queue -> linked list of updates. After this render pass, we'll restart
    // and apply the stashed updates on top of the work-in-progress hook.
    didScheduleRenderPhaseUpdate = true;
    var update = {
      action: action,
      next: null
    };

    if (renderPhaseUpdates === null) {
      renderPhaseUpdates = new Map();
    }

    var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);

    if (firstRenderPhaseUpdate === undefined) {
      renderPhaseUpdates.set(queue, update);
    } else {
      // Append the update to the end of the list.
      var lastRenderPhaseUpdate = firstRenderPhaseUpdate;

      while (lastRenderPhaseUpdate.next !== null) {
        lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
      }

      lastRenderPhaseUpdate.next = update;
    }
  }
}

function useCallback(callback, deps) {
  // Callbacks are passed as they are in the server environment.
  return callback;
}

function useResponder(responder, props) {
  return {
    props: props,
    responder: responder
  };
}

function useDeferredValue(value, config) {
  resolveCurrentlyRenderingComponent();
  return value;
}

function useTransition(config) {
  resolveCurrentlyRenderingComponent();

  var startTransition = function (callback) {
    callback();
  };

  return [startTransition, false];
}

function noop() {}

var currentThreadID = 0;
function setCurrentThreadID(threadID) {
  currentThreadID = threadID;
}
var Dispatcher = {
  readContext: readContext,
  useContext: useContext,
  useMemo: useMemo,
  useReducer: useReducer,
  useRef: useRef,
  useState: useState,
  useLayoutEffect: useLayoutEffect,
  useCallback: useCallback,
  // useImperativeHandle is not run in the server environment
  useImperativeHandle: noop,
  // Effects are not run in the server environment.
  useEffect: noop,
  // Debugging effect
  useDebugValue: noop,
  useResponder: useResponder,
  useDeferredValue: useDeferredValue,
  useTransition: useTransition
};

var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
var MATH_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
var Namespaces = {
  html: HTML_NAMESPACE,
  mathml: MATH_NAMESPACE,
  svg: SVG_NAMESPACE
}; // Assumes there is no parent namespace.

function getIntrinsicNamespace(type) {
  switch (type) {
    case 'svg':
      return SVG_NAMESPACE;

    case 'math':
      return MATH_NAMESPACE;

    default:
      return HTML_NAMESPACE;
  }
}
function getChildNamespace(parentNamespace, type) {
  if (parentNamespace == null || parentNamespace === HTML_NAMESPACE) {
    // No (or default) parent namespace: potential entry point.
    return getIntrinsicNamespace(type);
  }

  if (parentNamespace === SVG_NAMESPACE && type === 'foreignObject') {
    // We're leaving SVG.
    return HTML_NAMESPACE;
  } // By default, pass namespace below.


  return parentNamespace;
}

var ReactDebugCurrentFrame$2 = null;
var ReactControlledValuePropTypes = {
  checkPropTypes: null
};

{
  ReactDebugCurrentFrame$2 = ReactSharedInternals.ReactDebugCurrentFrame;
  var hasReadOnlyValue = {
    button: true,
    checkbox: true,
    image: true,
    hidden: true,
    radio: true,
    reset: true,
    submit: true
  };
  var propTypes = {
    value: function (props, propName, componentName) {
      if (hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled || props[propName] == null || enableDeprecatedFlareAPI ) {
        return null;
      }

      return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    },
    checked: function (props, propName, componentName) {
      if (props.onChange || props.readOnly || props.disabled || props[propName] == null || enableDeprecatedFlareAPI ) {
        return null;
      }

      return new Error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    }
  };
  /**
   * Provide a linked `value` attribute for controlled forms. You should not use
   * this outside of the ReactDOM controlled form components.
   */

  ReactControlledValuePropTypes.checkPropTypes = function (tagName, props) {
    checkPropTypes(propTypes, props, 'prop', tagName, ReactDebugCurrentFrame$2.getStackAddendum);
  };
}

// For HTML, certain tags should omit their close tag. We keep a whitelist for
// those special-case tags.
var omittedCloseTags = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true // NOTE: menuitem's close tag should be omitted, but that causes problems.

};

// `omittedCloseTags` except that `menuitem` should still have its closing tag.

var voidElementTags = _assign({
  menuitem: true
}, omittedCloseTags);

var HTML = '__html';
var ReactDebugCurrentFrame$3 = null;

{
  ReactDebugCurrentFrame$3 = ReactSharedInternals.ReactDebugCurrentFrame;
}

function assertValidProps(tag, props) {
  if (!props) {
    return;
  } // Note the use of `==` which checks for null or undefined.


  if (voidElementTags[tag]) {
    if (!(props.children == null && props.dangerouslySetInnerHTML == null)) {
      {
        throw Error( tag + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`." + ( ReactDebugCurrentFrame$3.getStackAddendum() ) );
      }
    }
  }

  if (props.dangerouslySetInnerHTML != null) {
    if (!(props.children == null)) {
      {
        throw Error( "Can only set one of `children` or `props.dangerouslySetInnerHTML`." );
      }
    }

    if (!(typeof props.dangerouslySetInnerHTML === 'object' && HTML in props.dangerouslySetInnerHTML)) {
      {
        throw Error( "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information." );
      }
    }
  }

  {
    if (!props.suppressContentEditableWarning && props.contentEditable && props.children != null) {
      error('A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.');
    }
  }

  if (!(props.style == null || typeof props.style === 'object')) {
    {
      throw Error( "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX." + ( ReactDebugCurrentFrame$3.getStackAddendum() ) );
    }
  }
}

/**
 * CSS properties which accept numbers but are not in units of "px".
 */
var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */

function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}
/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */


var prefixes = ['Webkit', 'ms', 'Moz', 'O']; // Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.

Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value with dimensions applied.
 */

function dangerousStyleValue(name, value, isCustomProperty) {
  // Note that we've removed escapeTextForBrowser() calls here since the
  // whole string will be escaped when the attribute is injected into
  // the markup. If you provide unsafe user data here they can inject
  // arbitrary CSS which may be problematic (I couldn't repro this):
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
  // This is not an XSS hole but instead a potential CSS injection issue
  // which has lead to a greater discussion about how we're going to
  // trust URLs moving forward. See #2115901
  var isEmpty = value == null || typeof value === 'boolean' || value === '';

  if (isEmpty) {
    return '';
  }

  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return ('' + value).trim();
}

var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;
/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 */

function hyphenateStyleName(name) {
  return name.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

function isCustomComponent(tagName, props) {
  if (tagName.indexOf('-') === -1) {
    return typeof props.is === 'string';
  }

  switch (tagName) {
    // These are reserved SVG and MathML elements.
    // We don't mind this whitelist too much because we expect it to never grow.
    // The alternative is to track the namespace in a few places which is convoluted.
    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return false;

    default:
      return true;
  }
}

var warnValidStyle = function () {};

{
  // 'msTransform' is correct, but the other prefixes should be capitalized
  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
  var msPattern$1 = /^-ms-/;
  var hyphenPattern = /-(.)/g; // style values shouldn't contain a semicolon

  var badStyleValueWithSemicolonPattern = /;\s*$/;
  var warnedStyleNames = {};
  var warnedStyleValues = {};
  var warnedForNaNValue = false;
  var warnedForInfinityValue = false;

  var camelize = function (string) {
    return string.replace(hyphenPattern, function (_, character) {
      return character.toUpperCase();
    });
  };

  var warnHyphenatedStyleName = function (name) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;

    error('Unsupported style property %s. Did you mean %s?', name, // As Andi Smith suggests
    // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
    // is converted to lowercase `ms`.
    camelize(name.replace(msPattern$1, 'ms-')));
  };

  var warnBadVendoredStyleName = function (name) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;

    error('Unsupported vendor-prefixed style property %s. Did you mean %s?', name, name.charAt(0).toUpperCase() + name.slice(1));
  };

  var warnStyleValueWithSemicolon = function (name, value) {
    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
      return;
    }

    warnedStyleValues[value] = true;

    error("Style property values shouldn't contain a semicolon. " + 'Try "%s: %s" instead.', name, value.replace(badStyleValueWithSemicolonPattern, ''));
  };

  var warnStyleValueIsNaN = function (name, value) {
    if (warnedForNaNValue) {
      return;
    }

    warnedForNaNValue = true;

    error('`NaN` is an invalid value for the `%s` css style property.', name);
  };

  var warnStyleValueIsInfinity = function (name, value) {
    if (warnedForInfinityValue) {
      return;
    }

    warnedForInfinityValue = true;

    error('`Infinity` is an invalid value for the `%s` css style property.', name);
  };

  warnValidStyle = function (name, value) {
    if (name.indexOf('-') > -1) {
      warnHyphenatedStyleName(name);
    } else if (badVendoredStyleNamePattern.test(name)) {
      warnBadVendoredStyleName(name);
    } else if (badStyleValueWithSemicolonPattern.test(value)) {
      warnStyleValueWithSemicolon(name, value);
    }

    if (typeof value === 'number') {
      if (isNaN(value)) {
        warnStyleValueIsNaN(name, value);
      } else if (!isFinite(value)) {
        warnStyleValueIsInfinity(name, value);
      }
    }
  };
}

var warnValidStyle$1 = warnValidStyle;

var ariaProperties = {
  'aria-current': 0,
  // state
  'aria-details': 0,
  'aria-disabled': 0,
  // state
  'aria-hidden': 0,
  // state
  'aria-invalid': 0,
  // state
  'aria-keyshortcuts': 0,
  'aria-label': 0,
  'aria-roledescription': 0,
  // Widget Attributes
  'aria-autocomplete': 0,
  'aria-checked': 0,
  'aria-expanded': 0,
  'aria-haspopup': 0,
  'aria-level': 0,
  'aria-modal': 0,
  'aria-multiline': 0,
  'aria-multiselectable': 0,
  'aria-orientation': 0,
  'aria-placeholder': 0,
  'aria-pressed': 0,
  'aria-readonly': 0,
  'aria-required': 0,
  'aria-selected': 0,
  'aria-sort': 0,
  'aria-valuemax': 0,
  'aria-valuemin': 0,
  'aria-valuenow': 0,
  'aria-valuetext': 0,
  // Live Region Attributes
  'aria-atomic': 0,
  'aria-busy': 0,
  'aria-live': 0,
  'aria-relevant': 0,
  // Drag-and-Drop Attributes
  'aria-dropeffect': 0,
  'aria-grabbed': 0,
  // Relationship Attributes
  'aria-activedescendant': 0,
  'aria-colcount': 0,
  'aria-colindex': 0,
  'aria-colspan': 0,
  'aria-controls': 0,
  'aria-describedby': 0,
  'aria-errormessage': 0,
  'aria-flowto': 0,
  'aria-labelledby': 0,
  'aria-owns': 0,
  'aria-posinset': 0,
  'aria-rowcount': 0,
  'aria-rowindex': 0,
  'aria-rowspan': 0,
  'aria-setsize': 0
};

var warnedProperties = {};
var rARIA = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
var rARIACamel = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;

function validateProperty(tagName, name) {
  {
    if (hasOwnProperty$1.call(warnedProperties, name) && warnedProperties[name]) {
      return true;
    }

    if (rARIACamel.test(name)) {
      var ariaName = 'aria-' + name.slice(4).toLowerCase();
      var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null; // If this is an aria-* attribute, but is not listed in the known DOM
      // DOM properties, then it is an invalid aria-* attribute.

      if (correctName == null) {
        error('Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.', name);

        warnedProperties[name] = true;
        return true;
      } // aria-* attributes should be lowercase; suggest the lowercase version.


      if (name !== correctName) {
        error('Invalid ARIA attribute `%s`. Did you mean `%s`?', name, correctName);

        warnedProperties[name] = true;
        return true;
      }
    }

    if (rARIA.test(name)) {
      var lowerCasedName = name.toLowerCase();
      var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null; // If this is an aria-* attribute, but is not listed in the known DOM
      // DOM properties, then it is an invalid aria-* attribute.

      if (standardName == null) {
        warnedProperties[name] = true;
        return false;
      } // aria-* attributes should be lowercase; suggest the lowercase version.


      if (name !== standardName) {
        error('Unknown ARIA attribute `%s`. Did you mean `%s`?', name, standardName);

        warnedProperties[name] = true;
        return true;
      }
    }
  }

  return true;
}

function warnInvalidARIAProps(type, props) {
  {
    var invalidProps = [];

    for (var key in props) {
      var isValid = validateProperty(type, key);

      if (!isValid) {
        invalidProps.push(key);
      }
    }

    var unknownPropString = invalidProps.map(function (prop) {
      return '`' + prop + '`';
    }).join(', ');

    if (invalidProps.length === 1) {
      error('Invalid aria prop %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop', unknownPropString, type);
    } else if (invalidProps.length > 1) {
      error('Invalid aria props %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop', unknownPropString, type);
    }
  }
}

function validateProperties(type, props) {
  if (isCustomComponent(type, props)) {
    return;
  }

  warnInvalidARIAProps(type, props);
}

var didWarnValueNull = false;
function validateProperties$1(type, props) {
  {
    if (type !== 'input' && type !== 'textarea' && type !== 'select') {
      return;
    }

    if (props != null && props.value === null && !didWarnValueNull) {
      didWarnValueNull = true;

      if (type === 'select' && props.multiple) {
        error('`value` prop on `%s` should not be null. ' + 'Consider using an empty array when `multiple` is set to `true` ' + 'to clear the component or `undefined` for uncontrolled components.', type);
      } else {
        error('`value` prop on `%s` should not be null. ' + 'Consider using an empty string to clear the component or `undefined` ' + 'for uncontrolled components.', type);
      }
    }
  }
}

/**
 * Mapping from registration name to plugin module
 */

var registrationNameModules = {};
/**
 * Mapping from lowercase registration names to the properly cased version,
 * used to warn in the case of missing event handlers. Available
 * only in true.
 * @type {Object}
 */

var possibleRegistrationNames =  {} ; // Trust the developer to only use possibleRegistrationNames in true

// When adding attributes to the HTML or SVG whitelist, be sure to
// also add them to this module to ensure casing and incorrect name
// warnings.
var possibleStandardNames = {
  // HTML
  accept: 'accept',
  acceptcharset: 'acceptCharset',
  'accept-charset': 'acceptCharset',
  accesskey: 'accessKey',
  action: 'action',
  allowfullscreen: 'allowFullScreen',
  alt: 'alt',
  as: 'as',
  async: 'async',
  autocapitalize: 'autoCapitalize',
  autocomplete: 'autoComplete',
  autocorrect: 'autoCorrect',
  autofocus: 'autoFocus',
  autoplay: 'autoPlay',
  autosave: 'autoSave',
  capture: 'capture',
  cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing',
  challenge: 'challenge',
  charset: 'charSet',
  checked: 'checked',
  children: 'children',
  cite: 'cite',
  class: 'className',
  classid: 'classID',
  classname: 'className',
  cols: 'cols',
  colspan: 'colSpan',
  content: 'content',
  contenteditable: 'contentEditable',
  contextmenu: 'contextMenu',
  controls: 'controls',
  controlslist: 'controlsList',
  coords: 'coords',
  crossorigin: 'crossOrigin',
  dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
  data: 'data',
  datetime: 'dateTime',
  default: 'default',
  defaultchecked: 'defaultChecked',
  defaultvalue: 'defaultValue',
  defer: 'defer',
  dir: 'dir',
  disabled: 'disabled',
  disablepictureinpicture: 'disablePictureInPicture',
  download: 'download',
  draggable: 'draggable',
  enctype: 'encType',
  for: 'htmlFor',
  form: 'form',
  formmethod: 'formMethod',
  formaction: 'formAction',
  formenctype: 'formEncType',
  formnovalidate: 'formNoValidate',
  formtarget: 'formTarget',
  frameborder: 'frameBorder',
  headers: 'headers',
  height: 'height',
  hidden: 'hidden',
  high: 'high',
  href: 'href',
  hreflang: 'hrefLang',
  htmlfor: 'htmlFor',
  httpequiv: 'httpEquiv',
  'http-equiv': 'httpEquiv',
  icon: 'icon',
  id: 'id',
  innerhtml: 'innerHTML',
  inputmode: 'inputMode',
  integrity: 'integrity',
  is: 'is',
  itemid: 'itemID',
  itemprop: 'itemProp',
  itemref: 'itemRef',
  itemscope: 'itemScope',
  itemtype: 'itemType',
  keyparams: 'keyParams',
  keytype: 'keyType',
  kind: 'kind',
  label: 'label',
  lang: 'lang',
  list: 'list',
  loop: 'loop',
  low: 'low',
  manifest: 'manifest',
  marginwidth: 'marginWidth',
  marginheight: 'marginHeight',
  max: 'max',
  maxlength: 'maxLength',
  media: 'media',
  mediagroup: 'mediaGroup',
  method: 'method',
  min: 'min',
  minlength: 'minLength',
  multiple: 'multiple',
  muted: 'muted',
  name: 'name',
  nomodule: 'noModule',
  nonce: 'nonce',
  novalidate: 'noValidate',
  open: 'open',
  optimum: 'optimum',
  pattern: 'pattern',
  placeholder: 'placeholder',
  playsinline: 'playsInline',
  poster: 'poster',
  preload: 'preload',
  profile: 'profile',
  radiogroup: 'radioGroup',
  readonly: 'readOnly',
  referrerpolicy: 'referrerPolicy',
  rel: 'rel',
  required: 'required',
  reversed: 'reversed',
  role: 'role',
  rows: 'rows',
  rowspan: 'rowSpan',
  sandbox: 'sandbox',
  scope: 'scope',
  scoped: 'scoped',
  scrolling: 'scrolling',
  seamless: 'seamless',
  selected: 'selected',
  shape: 'shape',
  size: 'size',
  sizes: 'sizes',
  span: 'span',
  spellcheck: 'spellCheck',
  src: 'src',
  srcdoc: 'srcDoc',
  srclang: 'srcLang',
  srcset: 'srcSet',
  start: 'start',
  step: 'step',
  style: 'style',
  summary: 'summary',
  tabindex: 'tabIndex',
  target: 'target',
  title: 'title',
  type: 'type',
  usemap: 'useMap',
  value: 'value',
  width: 'width',
  wmode: 'wmode',
  wrap: 'wrap',
  // SVG
  about: 'about',
  accentheight: 'accentHeight',
  'accent-height': 'accentHeight',
  accumulate: 'accumulate',
  additive: 'additive',
  alignmentbaseline: 'alignmentBaseline',
  'alignment-baseline': 'alignmentBaseline',
  allowreorder: 'allowReorder',
  alphabetic: 'alphabetic',
  amplitude: 'amplitude',
  arabicform: 'arabicForm',
  'arabic-form': 'arabicForm',
  ascent: 'ascent',
  attributename: 'attributeName',
  attributetype: 'attributeType',
  autoreverse: 'autoReverse',
  azimuth: 'azimuth',
  basefrequency: 'baseFrequency',
  baselineshift: 'baselineShift',
  'baseline-shift': 'baselineShift',
  baseprofile: 'baseProfile',
  bbox: 'bbox',
  begin: 'begin',
  bias: 'bias',
  by: 'by',
  calcmode: 'calcMode',
  capheight: 'capHeight',
  'cap-height': 'capHeight',
  clip: 'clip',
  clippath: 'clipPath',
  'clip-path': 'clipPath',
  clippathunits: 'clipPathUnits',
  cliprule: 'clipRule',
  'clip-rule': 'clipRule',
  color: 'color',
  colorinterpolation: 'colorInterpolation',
  'color-interpolation': 'colorInterpolation',
  colorinterpolationfilters: 'colorInterpolationFilters',
  'color-interpolation-filters': 'colorInterpolationFilters',
  colorprofile: 'colorProfile',
  'color-profile': 'colorProfile',
  colorrendering: 'colorRendering',
  'color-rendering': 'colorRendering',
  contentscripttype: 'contentScriptType',
  contentstyletype: 'contentStyleType',
  cursor: 'cursor',
  cx: 'cx',
  cy: 'cy',
  d: 'd',
  datatype: 'datatype',
  decelerate: 'decelerate',
  descent: 'descent',
  diffuseconstant: 'diffuseConstant',
  direction: 'direction',
  display: 'display',
  divisor: 'divisor',
  dominantbaseline: 'dominantBaseline',
  'dominant-baseline': 'dominantBaseline',
  dur: 'dur',
  dx: 'dx',
  dy: 'dy',
  edgemode: 'edgeMode',
  elevation: 'elevation',
  enablebackground: 'enableBackground',
  'enable-background': 'enableBackground',
  end: 'end',
  exponent: 'exponent',
  externalresourcesrequired: 'externalResourcesRequired',
  fill: 'fill',
  fillopacity: 'fillOpacity',
  'fill-opacity': 'fillOpacity',
  fillrule: 'fillRule',
  'fill-rule': 'fillRule',
  filter: 'filter',
  filterres: 'filterRes',
  filterunits: 'filterUnits',
  floodopacity: 'floodOpacity',
  'flood-opacity': 'floodOpacity',
  floodcolor: 'floodColor',
  'flood-color': 'floodColor',
  focusable: 'focusable',
  fontfamily: 'fontFamily',
  'font-family': 'fontFamily',
  fontsize: 'fontSize',
  'font-size': 'fontSize',
  fontsizeadjust: 'fontSizeAdjust',
  'font-size-adjust': 'fontSizeAdjust',
  fontstretch: 'fontStretch',
  'font-stretch': 'fontStretch',
  fontstyle: 'fontStyle',
  'font-style': 'fontStyle',
  fontvariant: 'fontVariant',
  'font-variant': 'fontVariant',
  fontweight: 'fontWeight',
  'font-weight': 'fontWeight',
  format: 'format',
  from: 'from',
  fx: 'fx',
  fy: 'fy',
  g1: 'g1',
  g2: 'g2',
  glyphname: 'glyphName',
  'glyph-name': 'glyphName',
  glyphorientationhorizontal: 'glyphOrientationHorizontal',
  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
  glyphorientationvertical: 'glyphOrientationVertical',
  'glyph-orientation-vertical': 'glyphOrientationVertical',
  glyphref: 'glyphRef',
  gradienttransform: 'gradientTransform',
  gradientunits: 'gradientUnits',
  hanging: 'hanging',
  horizadvx: 'horizAdvX',
  'horiz-adv-x': 'horizAdvX',
  horizoriginx: 'horizOriginX',
  'horiz-origin-x': 'horizOriginX',
  ideographic: 'ideographic',
  imagerendering: 'imageRendering',
  'image-rendering': 'imageRendering',
  in2: 'in2',
  in: 'in',
  inlist: 'inlist',
  intercept: 'intercept',
  k1: 'k1',
  k2: 'k2',
  k3: 'k3',
  k4: 'k4',
  k: 'k',
  kernelmatrix: 'kernelMatrix',
  kernelunitlength: 'kernelUnitLength',
  kerning: 'kerning',
  keypoints: 'keyPoints',
  keysplines: 'keySplines',
  keytimes: 'keyTimes',
  lengthadjust: 'lengthAdjust',
  letterspacing: 'letterSpacing',
  'letter-spacing': 'letterSpacing',
  lightingcolor: 'lightingColor',
  'lighting-color': 'lightingColor',
  limitingconeangle: 'limitingConeAngle',
  local: 'local',
  markerend: 'markerEnd',
  'marker-end': 'markerEnd',
  markerheight: 'markerHeight',
  markermid: 'markerMid',
  'marker-mid': 'markerMid',
  markerstart: 'markerStart',
  'marker-start': 'markerStart',
  markerunits: 'markerUnits',
  markerwidth: 'markerWidth',
  mask: 'mask',
  maskcontentunits: 'maskContentUnits',
  maskunits: 'maskUnits',
  mathematical: 'mathematical',
  mode: 'mode',
  numoctaves: 'numOctaves',
  offset: 'offset',
  opacity: 'opacity',
  operator: 'operator',
  order: 'order',
  orient: 'orient',
  orientation: 'orientation',
  origin: 'origin',
  overflow: 'overflow',
  overlineposition: 'overlinePosition',
  'overline-position': 'overlinePosition',
  overlinethickness: 'overlineThickness',
  'overline-thickness': 'overlineThickness',
  paintorder: 'paintOrder',
  'paint-order': 'paintOrder',
  panose1: 'panose1',
  'panose-1': 'panose1',
  pathlength: 'pathLength',
  patterncontentunits: 'patternContentUnits',
  patterntransform: 'patternTransform',
  patternunits: 'patternUnits',
  pointerevents: 'pointerEvents',
  'pointer-events': 'pointerEvents',
  points: 'points',
  pointsatx: 'pointsAtX',
  pointsaty: 'pointsAtY',
  pointsatz: 'pointsAtZ',
  prefix: 'prefix',
  preservealpha: 'preserveAlpha',
  preserveaspectratio: 'preserveAspectRatio',
  primitiveunits: 'primitiveUnits',
  property: 'property',
  r: 'r',
  radius: 'radius',
  refx: 'refX',
  refy: 'refY',
  renderingintent: 'renderingIntent',
  'rendering-intent': 'renderingIntent',
  repeatcount: 'repeatCount',
  repeatdur: 'repeatDur',
  requiredextensions: 'requiredExtensions',
  requiredfeatures: 'requiredFeatures',
  resource: 'resource',
  restart: 'restart',
  result: 'result',
  results: 'results',
  rotate: 'rotate',
  rx: 'rx',
  ry: 'ry',
  scale: 'scale',
  security: 'security',
  seed: 'seed',
  shaperendering: 'shapeRendering',
  'shape-rendering': 'shapeRendering',
  slope: 'slope',
  spacing: 'spacing',
  specularconstant: 'specularConstant',
  specularexponent: 'specularExponent',
  speed: 'speed',
  spreadmethod: 'spreadMethod',
  startoffset: 'startOffset',
  stddeviation: 'stdDeviation',
  stemh: 'stemh',
  stemv: 'stemv',
  stitchtiles: 'stitchTiles',
  stopcolor: 'stopColor',
  'stop-color': 'stopColor',
  stopopacity: 'stopOpacity',
  'stop-opacity': 'stopOpacity',
  strikethroughposition: 'strikethroughPosition',
  'strikethrough-position': 'strikethroughPosition',
  strikethroughthickness: 'strikethroughThickness',
  'strikethrough-thickness': 'strikethroughThickness',
  string: 'string',
  stroke: 'stroke',
  strokedasharray: 'strokeDasharray',
  'stroke-dasharray': 'strokeDasharray',
  strokedashoffset: 'strokeDashoffset',
  'stroke-dashoffset': 'strokeDashoffset',
  strokelinecap: 'strokeLinecap',
  'stroke-linecap': 'strokeLinecap',
  strokelinejoin: 'strokeLinejoin',
  'stroke-linejoin': 'strokeLinejoin',
  strokemiterlimit: 'strokeMiterlimit',
  'stroke-miterlimit': 'strokeMiterlimit',
  strokewidth: 'strokeWidth',
  'stroke-width': 'strokeWidth',
  strokeopacity: 'strokeOpacity',
  'stroke-opacity': 'strokeOpacity',
  suppresscontenteditablewarning: 'suppressContentEditableWarning',
  suppresshydrationwarning: 'suppressHydrationWarning',
  surfacescale: 'surfaceScale',
  systemlanguage: 'systemLanguage',
  tablevalues: 'tableValues',
  targetx: 'targetX',
  targety: 'targetY',
  textanchor: 'textAnchor',
  'text-anchor': 'textAnchor',
  textdecoration: 'textDecoration',
  'text-decoration': 'textDecoration',
  textlength: 'textLength',
  textrendering: 'textRendering',
  'text-rendering': 'textRendering',
  to: 'to',
  transform: 'transform',
  typeof: 'typeof',
  u1: 'u1',
  u2: 'u2',
  underlineposition: 'underlinePosition',
  'underline-position': 'underlinePosition',
  underlinethickness: 'underlineThickness',
  'underline-thickness': 'underlineThickness',
  unicode: 'unicode',
  unicodebidi: 'unicodeBidi',
  'unicode-bidi': 'unicodeBidi',
  unicoderange: 'unicodeRange',
  'unicode-range': 'unicodeRange',
  unitsperem: 'unitsPerEm',
  'units-per-em': 'unitsPerEm',
  unselectable: 'unselectable',
  valphabetic: 'vAlphabetic',
  'v-alphabetic': 'vAlphabetic',
  values: 'values',
  vectoreffect: 'vectorEffect',
  'vector-effect': 'vectorEffect',
  version: 'version',
  vertadvy: 'vertAdvY',
  'vert-adv-y': 'vertAdvY',
  vertoriginx: 'vertOriginX',
  'vert-origin-x': 'vertOriginX',
  vertoriginy: 'vertOriginY',
  'vert-origin-y': 'vertOriginY',
  vhanging: 'vHanging',
  'v-hanging': 'vHanging',
  videographic: 'vIdeographic',
  'v-ideographic': 'vIdeographic',
  viewbox: 'viewBox',
  viewtarget: 'viewTarget',
  visibility: 'visibility',
  vmathematical: 'vMathematical',
  'v-mathematical': 'vMathematical',
  vocab: 'vocab',
  widths: 'widths',
  wordspacing: 'wordSpacing',
  'word-spacing': 'wordSpacing',
  writingmode: 'writingMode',
  'writing-mode': 'writingMode',
  x1: 'x1',
  x2: 'x2',
  x: 'x',
  xchannelselector: 'xChannelSelector',
  xheight: 'xHeight',
  'x-height': 'xHeight',
  xlinkactuate: 'xlinkActuate',
  'xlink:actuate': 'xlinkActuate',
  xlinkarcrole: 'xlinkArcrole',
  'xlink:arcrole': 'xlinkArcrole',
  xlinkhref: 'xlinkHref',
  'xlink:href': 'xlinkHref',
  xlinkrole: 'xlinkRole',
  'xlink:role': 'xlinkRole',
  xlinkshow: 'xlinkShow',
  'xlink:show': 'xlinkShow',
  xlinktitle: 'xlinkTitle',
  'xlink:title': 'xlinkTitle',
  xlinktype: 'xlinkType',
  'xlink:type': 'xlinkType',
  xmlbase: 'xmlBase',
  'xml:base': 'xmlBase',
  xmllang: 'xmlLang',
  'xml:lang': 'xmlLang',
  xmlns: 'xmlns',
  'xml:space': 'xmlSpace',
  xmlnsxlink: 'xmlnsXlink',
  'xmlns:xlink': 'xmlnsXlink',
  xmlspace: 'xmlSpace',
  y1: 'y1',
  y2: 'y2',
  y: 'y',
  ychannelselector: 'yChannelSelector',
  z: 'z',
  zoomandpan: 'zoomAndPan'
};

var validateProperty$1 = function () {};

{
  var warnedProperties$1 = {};
  var _hasOwnProperty = Object.prototype.hasOwnProperty;
  var EVENT_NAME_REGEX = /^on./;
  var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
  var rARIA$1 = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
  var rARIACamel$1 = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

  validateProperty$1 = function (tagName, name, value, canUseEventSystem) {
    if (_hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
      return true;
    }

    var lowerCasedName = name.toLowerCase();

    if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout') {
      error('React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.');

      warnedProperties$1[name] = true;
      return true;
    } // We can't rely on the event system being injected on the server.


    if (canUseEventSystem) {
      if (registrationNameModules.hasOwnProperty(name)) {
        return true;
      }

      var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;

      if (registrationName != null) {
        error('Invalid event handler property `%s`. Did you mean `%s`?', name, registrationName);

        warnedProperties$1[name] = true;
        return true;
      }

      if (EVENT_NAME_REGEX.test(name)) {
        error('Unknown event handler property `%s`. It will be ignored.', name);

        warnedProperties$1[name] = true;
        return true;
      }
    } else if (EVENT_NAME_REGEX.test(name)) {
      // If no event plugins have been injected, we are in a server environment.
      // So we can't tell if the event name is correct for sure, but we can filter
      // out known bad ones like `onclick`. We can't suggest a specific replacement though.
      if (INVALID_EVENT_NAME_REGEX.test(name)) {
        error('Invalid event handler property `%s`. ' + 'React events use the camelCase naming convention, for example `onClick`.', name);
      }

      warnedProperties$1[name] = true;
      return true;
    } // Let the ARIA attribute hook validate ARIA attributes


    if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
      return true;
    }

    if (lowerCasedName === 'innerhtml') {
      error('Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.');

      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'aria') {
      error('The `aria` attribute is reserved for future use in React. ' + 'Pass individual `aria-` attributes instead.');

      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'is' && value !== null && value !== undefined && typeof value !== 'string') {
      error('Received a `%s` for a string attribute `is`. If this is expected, cast ' + 'the value to a string.', typeof value);

      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'number' && isNaN(value)) {
      error('Received NaN for the `%s` attribute. If this is expected, cast ' + 'the value to a string.', name);

      warnedProperties$1[name] = true;
      return true;
    }

    var propertyInfo = getPropertyInfo(name);
    var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED; // Known attributes should match the casing specified in the property config.

    if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
      var standardName = possibleStandardNames[lowerCasedName];

      if (standardName !== name) {
        error('Invalid DOM property `%s`. Did you mean `%s`?', name, standardName);

        warnedProperties$1[name] = true;
        return true;
      }
    } else if (!isReserved && name !== lowerCasedName) {
      // Unknown attributes should have lowercase casing since that's how they
      // will be cased anyway with server rendering.
      error('React does not recognize the `%s` prop on a DOM element. If you ' + 'intentionally want it to appear in the DOM as a custom ' + 'attribute, spell it as lowercase `%s` instead. ' + 'If you accidentally passed it from a parent component, remove ' + 'it from the DOM element.', name, lowerCasedName);

      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'boolean' && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
      if (value) {
        error('Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.', value, name, name, value, name);
      } else {
        error('Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.\n\n' + 'If you used to conditionally omit it with %s={condition && value}, ' + 'pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
      }

      warnedProperties$1[name] = true;
      return true;
    } // Now that we've validated casing, do not validate
    // data types for reserved props


    if (isReserved) {
      return true;
    } // Warn when a known attribute is a bad type


    if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
      warnedProperties$1[name] = true;
      return false;
    } // Warn when passing the strings 'false' or 'true' into a boolean prop


    if ((value === 'false' || value === 'true') && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
      error('Received the string `%s` for the boolean attribute `%s`. ' + '%s ' + 'Did you mean %s={%s}?', value, name, value === 'false' ? 'The browser will interpret it as a truthy value.' : 'Although this works, it will not work as expected if you pass the string "false".', name, value);

      warnedProperties$1[name] = true;
      return true;
    }

    return true;
  };
}

var warnUnknownProperties = function (type, props, canUseEventSystem) {
  {
    var unknownProps = [];

    for (var key in props) {
      var isValid = validateProperty$1(type, key, props[key], canUseEventSystem);

      if (!isValid) {
        unknownProps.push(key);
      }
    }

    var unknownPropString = unknownProps.map(function (prop) {
      return '`' + prop + '`';
    }).join(', ');

    if (unknownProps.length === 1) {
      error('Invalid value for prop %s on <%s> tag. Either remove it from the element, ' + 'or pass a string or number value to keep it in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior', unknownPropString, type);
    } else if (unknownProps.length > 1) {
      error('Invalid values for props %s on <%s> tag. Either remove them from the element, ' + 'or pass a string or number value to keep them in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior', unknownPropString, type);
    }
  }
};

function validateProperties$2(type, props, canUseEventSystem) {
  if (isCustomComponent(type, props)) {
    return;
  }

  warnUnknownProperties(type, props, canUseEventSystem);
}

var toArray = React.Children.toArray; // This is only used in DEV.
// Each entry is `this.stack` from a currently executing renderer instance.
// (There may be more than one because ReactDOMServer is reentrant).
// Each stack is an array of frames which may contain nested stacks of elements.

var currentDebugStacks = [];
var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var ReactDebugCurrentFrame$4;
var prevGetCurrentStackImpl = null;

var getCurrentServerStackImpl = function () {
  return '';
};

var describeStackFrame = function (element) {
  return '';
};

var validatePropertiesInDevelopment = function (type, props) {};

var pushCurrentDebugStack = function (stack) {};

var pushElementToDebugStack = function (element) {};

var popCurrentDebugStack = function () {};

var hasWarnedAboutUsingContextAsConsumer = false;

{
  ReactDebugCurrentFrame$4 = ReactSharedInternals.ReactDebugCurrentFrame;

  validatePropertiesInDevelopment = function (type, props) {
    validateProperties(type, props);
    validateProperties$1(type, props);
    validateProperties$2(type, props,
    /* canUseEventSystem */
    false);
  };

  describeStackFrame = function (element) {
    var source = element._source;
    var type = element.type;
    var name = getComponentName(type);
    var ownerName = null;
    return describeComponentFrame(name, source, ownerName);
  };

  pushCurrentDebugStack = function (stack) {
    currentDebugStacks.push(stack);

    if (currentDebugStacks.length === 1) {
      // We are entering a server renderer.
      // Remember the previous (e.g. client) global stack implementation.
      prevGetCurrentStackImpl = ReactDebugCurrentFrame$4.getCurrentStack;
      ReactDebugCurrentFrame$4.getCurrentStack = getCurrentServerStackImpl;
    }
  };

  pushElementToDebugStack = function (element) {
    // For the innermost executing ReactDOMServer call,
    var stack = currentDebugStacks[currentDebugStacks.length - 1]; // Take the innermost executing frame (e.g. <Foo>),

    var frame = stack[stack.length - 1]; // and record that it has one more element associated with it.

    frame.debugElementStack.push(element); // We only need this because we tail-optimize single-element
    // children and directly handle them in an inner loop instead of
    // creating separate frames for them.
  };

  popCurrentDebugStack = function () {
    currentDebugStacks.pop();

    if (currentDebugStacks.length === 0) {
      // We are exiting the server renderer.
      // Restore the previous (e.g. client) global stack implementation.
      ReactDebugCurrentFrame$4.getCurrentStack = prevGetCurrentStackImpl;
      prevGetCurrentStackImpl = null;
    }
  };

  getCurrentServerStackImpl = function () {
    if (currentDebugStacks.length === 0) {
      // Nothing is currently rendering.
      return '';
    } // ReactDOMServer is reentrant so there may be multiple calls at the same time.
    // Take the frames from the innermost call which is the last in the array.


    var frames = currentDebugStacks[currentDebugStacks.length - 1];
    var stack = ''; // Go through every frame in the stack from the innermost one.

    for (var i = frames.length - 1; i >= 0; i--) {
      var frame = frames[i]; // Every frame might have more than one debug element stack entry associated with it.
      // This is because single-child nesting doesn't create materialized frames.
      // Instead it would push them through `pushElementToDebugStack()`.

      var debugElementStack = frame.debugElementStack;

      for (var ii = debugElementStack.length - 1; ii >= 0; ii--) {
        stack += describeStackFrame(debugElementStack[ii]);
      }
    }

    return stack;
  };
}

var didWarnDefaultInputValue = false;
var didWarnDefaultChecked = false;
var didWarnDefaultSelectValue = false;
var didWarnDefaultTextareaValue = false;
var didWarnInvalidOptionChildren = false;
var didWarnAboutNoopUpdateForComponent = {};
var didWarnAboutBadClass = {};
var didWarnAboutModulePatternComponent = {};
var didWarnAboutDeprecatedWillMount = {};
var didWarnAboutUndefinedDerivedState = {};
var didWarnAboutUninitializedState = {};
var valuePropNames = ['value', 'defaultValue'];
var newlineEatingTags = {
  listing: true,
  pre: true,
  textarea: true
}; // We accept any tag to be rendered but since this gets injected into arbitrary
// HTML, we want to make sure that it's a safe tag.
// http://www.w3.org/TR/REC-xml/#NT-Name

var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset

var validatedTagCache = {};

function validateDangerousTag(tag) {
  if (!validatedTagCache.hasOwnProperty(tag)) {
    if (!VALID_TAG_REGEX.test(tag)) {
      {
        throw Error( "Invalid tag: " + tag );
      }
    }

    validatedTagCache[tag] = true;
  }
}

var styleNameCache = {};

var processStyleName = function (styleName) {
  if (styleNameCache.hasOwnProperty(styleName)) {
    return styleNameCache[styleName];
  }

  var result = hyphenateStyleName(styleName);
  styleNameCache[styleName] = result;
  return result;
};

function createMarkupForStyles(styles) {
  var serialized = '';
  var delimiter = '';

  for (var styleName in styles) {
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }

    var isCustomProperty = styleName.indexOf('--') === 0;
    var styleValue = styles[styleName];

    {
      if (!isCustomProperty) {
        warnValidStyle$1(styleName, styleValue);
      }
    }

    if (styleValue != null) {
      serialized += delimiter + (isCustomProperty ? styleName : processStyleName(styleName)) + ':';
      serialized += dangerousStyleValue(styleName, styleValue, isCustomProperty);
      delimiter = ';';
    }
  }

  return serialized || null;
}

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && getComponentName(_constructor) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;

    if (didWarnAboutNoopUpdateForComponent[warningKey]) {
      return;
    }

    error('%s(...): Can only update a mounting component. ' + 'This usually means you called %s() outside componentWillMount() on the server. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, componentName);

    didWarnAboutNoopUpdateForComponent[warningKey] = true;
  }
}

function shouldConstruct(Component) {
  return Component.prototype && Component.prototype.isReactComponent;
}

function getNonChildrenInnerMarkup(props) {
  var innerHTML = props.dangerouslySetInnerHTML;

  if (innerHTML != null) {
    if (innerHTML.__html != null) {
      return innerHTML.__html;
    }
  } else {
    var content = props.children;

    if (typeof content === 'string' || typeof content === 'number') {
      return escapeTextForBrowser(content);
    }
  }

  return null;
}

function flattenTopLevelChildren(children) {
  if (!React.isValidElement(children)) {
    return toArray(children);
  }

  var element = children;

  if (element.type !== REACT_FRAGMENT_TYPE) {
    return [element];
  }

  var fragmentChildren = element.props.children;

  if (!React.isValidElement(fragmentChildren)) {
    return toArray(fragmentChildren);
  }

  var fragmentChildElement = fragmentChildren;
  return [fragmentChildElement];
}

function flattenOptionChildren(children) {
  if (children === undefined || children === null) {
    return children;
  }

  var content = ''; // Flatten children and warn if they aren't strings or numbers;
  // invalid types are ignored.

  React.Children.forEach(children, function (child) {
    if (child == null) {
      return;
    }

    content += child;

    {
      if (!didWarnInvalidOptionChildren && typeof child !== 'string' && typeof child !== 'number') {
        didWarnInvalidOptionChildren = true;

        error('Only strings and numbers are supported as <option> children.');
      }
    }
  });
  return content;
}

var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
var STYLE = 'style';
var RESERVED_PROPS = {
  children: null,
  dangerouslySetInnerHTML: null,
  suppressContentEditableWarning: null,
  suppressHydrationWarning: null
};

function createOpenTagMarkup(tagVerbatim, tagLowercase, props, namespace, makeStaticMarkup, isRootElement) {
  var ret = '<' + tagVerbatim;

  for (var propKey in props) {
    if (!hasOwnProperty$2.call(props, propKey)) {
      continue;
    }

    var propValue = props[propKey];

    if (propValue == null) {
      continue;
    }

    if (propKey === STYLE) {
      propValue = createMarkupForStyles(propValue);
    }

    var markup = null;

    if (isCustomComponent(tagLowercase, props)) {
      if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
        markup = createMarkupForCustomAttribute(propKey, propValue);
      }
    } else {
      markup = createMarkupForProperty(propKey, propValue);
    }

    if (markup) {
      ret += ' ' + markup;
    }
  } // For static pages, no need to put React ID and checksum. Saves lots of
  // bytes.


  if (makeStaticMarkup) {
    return ret;
  }

  if (isRootElement) {
    ret += ' ' + createMarkupForRoot();
  }

  return ret;
}

function validateRenderResult(child, type) {
  if (child === undefined) {
    {
      {
        throw Error( (getComponentName(type) || 'Component') + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null." );
      }
    }
  }
}

function resolve(child, context, threadID) {
  while (React.isValidElement(child)) {
    // Safe because we just checked it's an element.
    var element = child;
    var Component = element.type;

    {
      pushElementToDebugStack(element);
    }

    if (typeof Component !== 'function') {
      break;
    }

    processChild(element, Component);
  } // Extra closure so queue and replace can be captured properly


  function processChild(element, Component) {
    var isClass = shouldConstruct(Component);
    var publicContext = processContext(Component, context, threadID, isClass);
    var queue = [];
    var replace = false;
    var updater = {
      isMounted: function (publicInstance) {
        return false;
      },
      enqueueForceUpdate: function (publicInstance) {
        if (queue === null) {
          warnNoop(publicInstance, 'forceUpdate');
          return null;
        }
      },
      enqueueReplaceState: function (publicInstance, completeState) {
        replace = true;
        queue = [completeState];
      },
      enqueueSetState: function (publicInstance, currentPartialState) {
        if (queue === null) {
          warnNoop(publicInstance, 'setState');
          return null;
        }

        queue.push(currentPartialState);
      }
    };
    var inst;

    if (isClass) {
      inst = new Component(element.props, publicContext, updater);

      if (typeof Component.getDerivedStateFromProps === 'function') {
        {
          if (inst.state === null || inst.state === undefined) {
            var componentName = getComponentName(Component) || 'Unknown';

            if (!didWarnAboutUninitializedState[componentName]) {
              error('`%s` uses `getDerivedStateFromProps` but its initial state is ' + '%s. This is not recommended. Instead, define the initial state by ' + 'assigning an object to `this.state` in the constructor of `%s`. ' + 'This ensures that `getDerivedStateFromProps` arguments have a consistent shape.', componentName, inst.state === null ? 'null' : 'undefined', componentName);

              didWarnAboutUninitializedState[componentName] = true;
            }
          }
        }

        var partialState = Component.getDerivedStateFromProps.call(null, element.props, inst.state);

        {
          if (partialState === undefined) {
            var _componentName = getComponentName(Component) || 'Unknown';

            if (!didWarnAboutUndefinedDerivedState[_componentName]) {
              error('%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. ' + 'You have returned undefined.', _componentName);

              didWarnAboutUndefinedDerivedState[_componentName] = true;
            }
          }
        }

        if (partialState != null) {
          inst.state = _assign({}, inst.state, partialState);
        }
      }
    } else {
      {
        if (Component.prototype && typeof Component.prototype.render === 'function') {
          var _componentName2 = getComponentName(Component) || 'Unknown';

          if (!didWarnAboutBadClass[_componentName2]) {
            error("The <%s /> component appears to have a render method, but doesn't extend React.Component. " + 'This is likely to cause errors. Change %s to extend React.Component instead.', _componentName2, _componentName2);

            didWarnAboutBadClass[_componentName2] = true;
          }
        }
      }

      var componentIdentity = {};
      prepareToUseHooks(componentIdentity);
      inst = Component(element.props, publicContext, updater);
      inst = finishHooks(Component, element.props, inst, publicContext);

      if (inst == null || inst.render == null) {
        child = inst;
        validateRenderResult(child, Component);
        return;
      }

      {
        var _componentName3 = getComponentName(Component) || 'Unknown';

        if (!didWarnAboutModulePatternComponent[_componentName3]) {
          error('The <%s /> component appears to be a function component that returns a class instance. ' + 'Change %s to a class that extends React.Component instead. ' + "If you can't use a class try assigning the prototype on the function as a workaround. " + "`%s.prototype = React.Component.prototype`. Don't use an arrow function since it " + 'cannot be called with `new` by React.', _componentName3, _componentName3, _componentName3);

          didWarnAboutModulePatternComponent[_componentName3] = true;
        }
      }
    }

    inst.props = element.props;
    inst.context = publicContext;
    inst.updater = updater;
    var initialState = inst.state;

    if (initialState === undefined) {
      inst.state = initialState = null;
    }

    if (typeof inst.UNSAFE_componentWillMount === 'function' || typeof inst.componentWillMount === 'function') {
      if (typeof inst.componentWillMount === 'function') {
        {
          if ( inst.componentWillMount.__suppressDeprecationWarning !== true) {
            var _componentName4 = getComponentName(Component) || 'Unknown';

            if (!didWarnAboutDeprecatedWillMount[_componentName4]) {
              warn( // keep this warning in sync with ReactStrictModeWarning.js
              'componentWillMount has been renamed, and is not recommended for use. ' + 'See https://fb.me/react-unsafe-component-lifecycles for details.\n\n' + '* Move code from componentWillMount to componentDidMount (preferred in most cases) ' + 'or the constructor.\n' + '\nPlease update the following components: %s', _componentName4);

              didWarnAboutDeprecatedWillMount[_componentName4] = true;
            }
          }
        } // In order to support react-lifecycles-compat polyfilled components,
        // Unsafe lifecycles should not be invoked for any component with the new gDSFP.


        if (typeof Component.getDerivedStateFromProps !== 'function') {
          inst.componentWillMount();
        }
      }

      if (typeof inst.UNSAFE_componentWillMount === 'function' && typeof Component.getDerivedStateFromProps !== 'function') {
        // In order to support react-lifecycles-compat polyfilled components,
        // Unsafe lifecycles should not be invoked for any component with the new gDSFP.
        inst.UNSAFE_componentWillMount();
      }

      if (queue.length) {
        var oldQueue = queue;
        var oldReplace = replace;
        queue = null;
        replace = false;

        if (oldReplace && oldQueue.length === 1) {
          inst.state = oldQueue[0];
        } else {
          var nextState = oldReplace ? oldQueue[0] : inst.state;
          var dontMutate = true;

          for (var i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
            var partial = oldQueue[i];

            var _partialState = typeof partial === 'function' ? partial.call(inst, nextState, element.props, publicContext) : partial;

            if (_partialState != null) {
              if (dontMutate) {
                dontMutate = false;
                nextState = _assign({}, nextState, _partialState);
              } else {
                _assign(nextState, _partialState);
              }
            }
          }

          inst.state = nextState;
        }
      } else {
        queue = null;
      }
    }

    child = inst.render();

    {
      if (child === undefined && inst.render._isMockFunction) {
        // This is probably bad practice. Consider warning here and
        // deprecating this convenience.
        child = null;
      }
    }

    validateRenderResult(child, Component);
    var childContext;

    {
      if (typeof inst.getChildContext === 'function') {
        var _childContextTypes = Component.childContextTypes;

        if (typeof _childContextTypes === 'object') {
          childContext = inst.getChildContext();

          for (var contextKey in childContext) {
            if (!(contextKey in _childContextTypes)) {
              {
                throw Error( (getComponentName(Component) || 'Unknown') + ".getChildContext(): key \"" + contextKey + "\" is not defined in childContextTypes." );
              }
            }
          }
        } else {
          {
            error('%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', getComponentName(Component) || 'Unknown');
          }
        }
      }

      if (childContext) {
        context = _assign({}, context, childContext);
      }
    }
  }

  return {
    child: child,
    context: context
  };
}

var ReactDOMServerRenderer =
/*#__PURE__*/
function () {
  // TODO: type this more strictly:
  // DEV-only
  function ReactDOMServerRenderer(children, makeStaticMarkup) {
    var flatChildren = flattenTopLevelChildren(children);
    var topFrame = {
      type: null,
      // Assume all trees start in the HTML namespace (not totally true, but
      // this is what we did historically)
      domNamespace: Namespaces.html,
      children: flatChildren,
      childIndex: 0,
      context: emptyObject,
      footer: ''
    };

    {
      topFrame.debugElementStack = [];
    }

    this.threadID = allocThreadID();
    this.stack = [topFrame];
    this.exhausted = false;
    this.currentSelectValue = null;
    this.previousWasTextNode = false;
    this.makeStaticMarkup = makeStaticMarkup;
    this.suspenseDepth = 0; // Context (new API)

    this.contextIndex = -1;
    this.contextStack = [];
    this.contextValueStack = [];

    {
      this.contextProviderStack = [];
    }
  }

  var _proto = ReactDOMServerRenderer.prototype;

  _proto.destroy = function destroy() {
    if (!this.exhausted) {
      this.exhausted = true;
      this.clearProviders();
      freeThreadID(this.threadID);
    }
  }
  /**
   * Note: We use just two stacks regardless of how many context providers you have.
   * Providers are always popped in the reverse order to how they were pushed
   * so we always know on the way down which provider you'll encounter next on the way up.
   * On the way down, we push the current provider, and its context value *before*
   * we mutated it, onto the stacks. Therefore, on the way up, we always know which
   * provider needs to be "restored" to which value.
   * https://github.com/facebook/react/pull/12985#issuecomment-396301248
   */
  ;

  _proto.pushProvider = function pushProvider(provider) {
    var index = ++this.contextIndex;
    var context = provider.type._context;
    var threadID = this.threadID;
    validateContextBounds(context, threadID);
    var previousValue = context[threadID]; // Remember which value to restore this context to on our way up.

    this.contextStack[index] = context;
    this.contextValueStack[index] = previousValue;

    {
      // Only used for push/pop mismatch warnings.
      this.contextProviderStack[index] = provider;
    } // Mutate the current value.


    context[threadID] = provider.props.value;
  };

  _proto.popProvider = function popProvider(provider) {
    var index = this.contextIndex;

    {
      if (index < 0 || provider !== this.contextProviderStack[index]) {
        error('Unexpected pop.');
      }
    }

    var context = this.contextStack[index];
    var previousValue = this.contextValueStack[index]; // "Hide" these null assignments from Flow by using `any`
    // because conceptually they are deletions--as long as we
    // promise to never access values beyond `this.contextIndex`.

    this.contextStack[index] = null;
    this.contextValueStack[index] = null;

    {
      this.contextProviderStack[index] = null;
    }

    this.contextIndex--; // Restore to the previous value we stored as we were walking down.
    // We've already verified that this context has been expanded to accommodate
    // this thread id, so we don't need to do it again.

    context[this.threadID] = previousValue;
  };

  _proto.clearProviders = function clearProviders() {
    // Restore any remaining providers on the stack to previous values
    for (var index = this.contextIndex; index >= 0; index--) {
      var context = this.contextStack[index];
      var previousValue = this.contextValueStack[index];
      context[this.threadID] = previousValue;
    }
  };

  _proto.read = function read(bytes) {
    if (this.exhausted) {
      return null;
    }

    var prevThreadID = currentThreadID;
    setCurrentThreadID(this.threadID);
    var prevDispatcher = ReactCurrentDispatcher.current;
    ReactCurrentDispatcher.current = Dispatcher;

    try {
      // Markup generated within <Suspense> ends up buffered until we know
      // nothing in that boundary suspended
      var out = [''];
      var suspended = false;

      while (out[0].length < bytes) {
        if (this.stack.length === 0) {
          this.exhausted = true;
          freeThreadID(this.threadID);
          break;
        }

        var frame = this.stack[this.stack.length - 1];

        if (suspended || frame.childIndex >= frame.children.length) {
          var footer = frame.footer;

          if (footer !== '') {
            this.previousWasTextNode = false;
          }

          this.stack.pop();

          if (frame.type === 'select') {
            this.currentSelectValue = null;
          } else if (frame.type != null && frame.type.type != null && frame.type.type.$$typeof === REACT_PROVIDER_TYPE) {
            var provider = frame.type;
            this.popProvider(provider);
          } else if (frame.type === REACT_SUSPENSE_TYPE) {
            this.suspenseDepth--;
            var buffered = out.pop();

            if (suspended) {
              suspended = false; // If rendering was suspended at this boundary, render the fallbackFrame

              var fallbackFrame = frame.fallbackFrame;

              if (!fallbackFrame) {
                {
                  throw Error(true ? "ReactDOMServer did not find an internal fallback frame for Suspense. This is a bug in React. Please file an issue." : undefined);
                }
              }

              this.stack.push(fallbackFrame);
              out[this.suspenseDepth] += '<!--$!-->'; // Skip flushing output since we're switching to the fallback

              continue;
            } else {
              out[this.suspenseDepth] += buffered;
            }
          } // Flush output


          out[this.suspenseDepth] += footer;
          continue;
        }

        var child = frame.children[frame.childIndex++];
        var outBuffer = '';

        if (true) {
          pushCurrentDebugStack(this.stack); // We're starting work on this frame, so reset its inner stack.

          frame.debugElementStack.length = 0;
        }

        try {
          outBuffer += this.render(child, frame.context, frame.domNamespace);
        } catch (err) {
          if (err != null && typeof err.then === 'function') {
            if (enableSuspenseServerRenderer) {
              if (!(this.suspenseDepth > 0)) {
                {
                  throw Error(true ? "A React component suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." : undefined);
                }
              }

              suspended = true;
            } else {
              if (true) {
                {
                  throw Error(true ? "ReactDOMServer does not yet support Suspense." : undefined);
                }
              }
            }
          } else {
            throw err;
          }
        } finally {
          if (true) {
            popCurrentDebugStack();
          }
        }

        if (out.length <= this.suspenseDepth) {
          out.push('');
        }

        out[this.suspenseDepth] += outBuffer;
      }

      return out[0];
    } finally {
      ReactCurrentDispatcher.current = prevDispatcher;
      setCurrentThreadID(prevThreadID);
    }
  };

  _proto.render = function render(child, context, parentNamespace) {
    if (typeof child === 'string' || typeof child === 'number') {
      var text = '' + child;

      if (text === '') {
        return '';
      }

      if (this.makeStaticMarkup) {
        return escapeTextForBrowser(text);
      }

      if (this.previousWasTextNode) {
        return '<!-- -->' + escapeTextForBrowser(text);
      }

      this.previousWasTextNode = true;
      return escapeTextForBrowser(text);
    } else {
      var nextChild;

      var _resolve = resolve(child, context, this.threadID);

      nextChild = _resolve.child;
      context = _resolve.context;

      if (nextChild === null || nextChild === false) {
        return '';
      } else if (!React.isValidElement(nextChild)) {
        if (nextChild != null && nextChild.$$typeof != null) {
          // Catch unexpected special types early.
          var $$typeof = nextChild.$$typeof;

          if (!($$typeof !== REACT_PORTAL_TYPE)) {
            {
              throw Error( "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render." );
            }
          } // Catch-all to prevent an infinite loop if React.Children.toArray() supports some new type.


          {
            {
              throw Error( "Unknown element-like object type: " + $$typeof.toString() + ". This is likely a bug in React. Please file an issue." );
            }
          }
        }

        var nextChildren = toArray(nextChild);
        var frame = {
          type: null,
          domNamespace: parentNamespace,
          children: nextChildren,
          childIndex: 0,
          context: context,
          footer: ''
        };

        {
          frame.debugElementStack = [];
        }

        this.stack.push(frame);
        return '';
      } // Safe because we just checked it's an element.


      var nextElement = nextChild;
      var elementType = nextElement.type;

      if (typeof elementType === 'string') {
        return this.renderDOM(nextElement, context, parentNamespace);
      }

      switch (elementType) {
        case REACT_STRICT_MODE_TYPE:
        case REACT_CONCURRENT_MODE_TYPE:
        case REACT_PROFILER_TYPE:
        case REACT_SUSPENSE_LIST_TYPE:
        case REACT_FRAGMENT_TYPE:
          {
            var _nextChildren = toArray(nextChild.props.children);

            var _frame = {
              type: null,
              domNamespace: parentNamespace,
              children: _nextChildren,
              childIndex: 0,
              context: context,
              footer: ''
            };

            {
              _frame.debugElementStack = [];
            }

            this.stack.push(_frame);
            return '';
          }

        case REACT_SUSPENSE_TYPE:
          {
            {
              {
                {
                  throw Error( "ReactDOMServer does not yet support Suspense." );
                }
              }
            }
          }
      }

      if (typeof elementType === 'object' && elementType !== null) {
        switch (elementType.$$typeof) {
          case REACT_FORWARD_REF_TYPE:
            {
              var element = nextChild;

              var _nextChildren4;

              var componentIdentity = {};
              prepareToUseHooks(componentIdentity);
              _nextChildren4 = elementType.render(element.props, element.ref);
              _nextChildren4 = finishHooks(elementType.render, element.props, _nextChildren4, element.ref);
              _nextChildren4 = toArray(_nextChildren4);
              var _frame4 = {
                type: null,
                domNamespace: parentNamespace,
                children: _nextChildren4,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame4.debugElementStack = [];
              }

              this.stack.push(_frame4);
              return '';
            }

          case REACT_MEMO_TYPE:
            {
              var _element = nextChild;
              var _nextChildren5 = [React.createElement(elementType.type, _assign({
                ref: _element.ref
              }, _element.props))];
              var _frame5 = {
                type: null,
                domNamespace: parentNamespace,
                children: _nextChildren5,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame5.debugElementStack = [];
              }

              this.stack.push(_frame5);
              return '';
            }

          case REACT_PROVIDER_TYPE:
            {
              var provider = nextChild;
              var nextProps = provider.props;

              var _nextChildren6 = toArray(nextProps.children);

              var _frame6 = {
                type: provider,
                domNamespace: parentNamespace,
                children: _nextChildren6,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame6.debugElementStack = [];
              }

              this.pushProvider(provider);
              this.stack.push(_frame6);
              return '';
            }

          case REACT_CONTEXT_TYPE:
            {
              var reactContext = nextChild.type; // The logic below for Context differs depending on PROD or DEV mode. In
              // DEV mode, we create a separate object for Context.Consumer that acts
              // like a proxy to Context. This proxy object adds unnecessary code in PROD
              // so we use the old behaviour (Context.Consumer references Context) to
              // reduce size and overhead. The separate object references context via
              // a property called "_context", which also gives us the ability to check
              // in DEV mode if this property exists or not and warn if it does not.

              {
                if (reactContext._context === undefined) {
                  // This may be because it's a Context (rather than a Consumer).
                  // Or it may be because it's older React where they're the same thing.
                  // We only want to warn if we're sure it's a new React.
                  if (reactContext !== reactContext.Consumer) {
                    if (!hasWarnedAboutUsingContextAsConsumer) {
                      hasWarnedAboutUsingContextAsConsumer = true;

                      error('Rendering <Context> directly is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
                    }
                  }
                } else {
                  reactContext = reactContext._context;
                }
              }

              var _nextProps = nextChild.props;
              var threadID = this.threadID;
              validateContextBounds(reactContext, threadID);
              var nextValue = reactContext[threadID];

              var _nextChildren7 = toArray(_nextProps.children(nextValue));

              var _frame7 = {
                type: nextChild,
                domNamespace: parentNamespace,
                children: _nextChildren7,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame7.debugElementStack = [];
              }

              this.stack.push(_frame7);
              return '';
            }
          // eslint-disable-next-line-no-fallthrough

          case REACT_FUNDAMENTAL_TYPE:
            {

              {
                {
                  throw Error( "ReactDOMServer does not yet support the fundamental API." );
                }
              }
            }
          // eslint-disable-next-line-no-fallthrough

          case REACT_LAZY_TYPE:
            {
              var _element2 = nextChild;
              var lazyComponent = nextChild.type; // Attempt to initialize lazy component regardless of whether the
              // suspense server-side renderer is enabled so synchronously
              // resolved constructors are supported.

              initializeLazyComponentType(lazyComponent);

              switch (lazyComponent._status) {
                case Resolved:
                  {
                    var _nextChildren9 = [React.createElement(lazyComponent._result, _assign({
                      ref: _element2.ref
                    }, _element2.props))];
                    var _frame9 = {
                      type: null,
                      domNamespace: parentNamespace,
                      children: _nextChildren9,
                      childIndex: 0,
                      context: context,
                      footer: ''
                    };

                    {
                      _frame9.debugElementStack = [];
                    }

                    this.stack.push(_frame9);
                    return '';
                  }

                case Rejected:
                  throw lazyComponent._result;

                case Pending:
                default:
                  {
                    {
                      throw Error( "ReactDOMServer does not yet support lazy-loaded components." );
                    }
                  }

              }
            }
          // eslint-disable-next-line-no-fallthrough

          case REACT_SCOPE_TYPE:
            {

              {
                {
                  throw Error( "ReactDOMServer does not yet support scope components." );
                }
              }
            }
        }
      }

      var info = '';

      {
        var owner = nextElement._owner;

        if (elementType === undefined || typeof elementType === 'object' && elementType !== null && Object.keys(elementType).length === 0) {
          info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and " + 'named imports.';
        }

        var ownerName = owner ? getComponentName(owner) : null;

        if (ownerName) {
          info += '\n\nCheck the render method of `' + ownerName + '`.';
        }
      }

      {
        {
          throw Error( "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (elementType == null ? elementType : typeof elementType) + "." + info );
        }
      }
    }
  };

  _proto.renderDOM = function renderDOM(element, context, parentNamespace) {
    var tag = element.type.toLowerCase();
    var namespace = parentNamespace;

    if (parentNamespace === Namespaces.html) {
      namespace = getIntrinsicNamespace(tag);
    }

    {
      if (namespace === Namespaces.html) {
        // Should this check be gated by parent namespace? Not sure we want to
        // allow <SVG> or <mATH>.
        if (tag !== element.type) {
          error('<%s /> is using incorrect casing. ' + 'Use PascalCase for React components, ' + 'or lowercase for HTML elements.', element.type);
        }
      }
    }

    validateDangerousTag(tag);
    var props = element.props;

    if (tag === 'input') {
      {
        ReactControlledValuePropTypes.checkPropTypes('input', props);

        if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnDefaultChecked) {
          error('%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', 'A component', props.type);

          didWarnDefaultChecked = true;
        }

        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultInputValue) {
          error('%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', 'A component', props.type);

          didWarnDefaultInputValue = true;
        }
      }

      props = _assign({
        type: undefined
      }, props, {
        defaultChecked: undefined,
        defaultValue: undefined,
        value: props.value != null ? props.value : props.defaultValue,
        checked: props.checked != null ? props.checked : props.defaultChecked
      });
    } else if (tag === 'textarea') {
      {
        ReactControlledValuePropTypes.checkPropTypes('textarea', props);

        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultTextareaValue) {
          error('Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');

          didWarnDefaultTextareaValue = true;
        }
      }

      var initialValue = props.value;

      if (initialValue == null) {
        var defaultValue = props.defaultValue; // TODO (yungsters): Remove support for children content in <textarea>.

        var textareaChildren = props.children;

        if (textareaChildren != null) {
          {
            error('Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.');
          }

          if (!(defaultValue == null)) {
            {
              throw Error( "If you supply `defaultValue` on a <textarea>, do not pass children." );
            }
          }

          if (Array.isArray(textareaChildren)) {
            if (!(textareaChildren.length <= 1)) {
              {
                throw Error( "<textarea> can only have at most one child." );
              }
            }

            textareaChildren = textareaChildren[0];
          }

          defaultValue = '' + textareaChildren;
        }

        if (defaultValue == null) {
          defaultValue = '';
        }

        initialValue = defaultValue;
      }

      props = _assign({}, props, {
        value: undefined,
        children: '' + initialValue
      });
    } else if (tag === 'select') {
      {
        ReactControlledValuePropTypes.checkPropTypes('select', props);

        for (var i = 0; i < valuePropNames.length; i++) {
          var propName = valuePropNames[i];

          if (props[propName] == null) {
            continue;
          }

          var isArray = Array.isArray(props[propName]);

          if (props.multiple && !isArray) {
            error('The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.', propName);
          } else if (!props.multiple && isArray) {
            error('The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.', propName);
          }
        }

        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultSelectValue) {
          error('Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');

          didWarnDefaultSelectValue = true;
        }
      }

      this.currentSelectValue = props.value != null ? props.value : props.defaultValue;
      props = _assign({}, props, {
        value: undefined
      });
    } else if (tag === 'option') {
      var selected = null;
      var selectValue = this.currentSelectValue;
      var optionChildren = flattenOptionChildren(props.children);

      if (selectValue != null) {
        var value;

        if (props.value != null) {
          value = props.value + '';
        } else {
          value = optionChildren;
        }

        selected = false;

        if (Array.isArray(selectValue)) {
          // multiple
          for (var j = 0; j < selectValue.length; j++) {
            if ('' + selectValue[j] === value) {
              selected = true;
              break;
            }
          }
        } else {
          selected = '' + selectValue === value;
        }

        props = _assign({
          selected: undefined,
          children: undefined
        }, props, {
          selected: selected,
          children: optionChildren
        });
      }
    }

    {
      validatePropertiesInDevelopment(tag, props);
    }

    assertValidProps(tag, props);
    var out = createOpenTagMarkup(element.type, tag, props, namespace, this.makeStaticMarkup, this.stack.length === 1);
    var footer = '';

    if (omittedCloseTags.hasOwnProperty(tag)) {
      out += '/>';
    } else {
      out += '>';
      footer = '</' + element.type + '>';
    }

    var children;
    var innerMarkup = getNonChildrenInnerMarkup(props);

    if (innerMarkup != null) {
      children = [];

      if (newlineEatingTags.hasOwnProperty(tag) && innerMarkup.charAt(0) === '\n') {
        // text/html ignores the first character in these tags if it's a newline
        // Prefer to break application/xml over text/html (for now) by adding
        // a newline specifically to get eaten by the parser. (Alternately for
        // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
        // \r is normalized out by HTMLTextAreaElement#value.)
        // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
        // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
        // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
        // See: Parsing of "textarea" "listing" and "pre" elements
        //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
        out += '\n';
      }

      out += innerMarkup;
    } else {
      children = toArray(props.children);
    }

    var frame = {
      domNamespace: getChildNamespace(parentNamespace, element.type),
      type: tag,
      children: children,
      childIndex: 0,
      context: context,
      footer: footer
    };

    {
      frame.debugElementStack = [];
    }

    this.stack.push(frame);
    this.previousWasTextNode = false;
    return out;
  };

  return ReactDOMServerRenderer;
}();

/**
 * Render a ReactElement to its initial HTML. This should only be used on the
 * server.
 * See https://reactjs.org/docs/react-dom-server.html#rendertostring
 */

function renderToString(element) {
  var renderer = new ReactDOMServerRenderer(element, false);

  try {
    var markup = renderer.read(Infinity);
    return markup;
  } finally {
    renderer.destroy();
  }
}
/**
 * Similar to renderToString, except this doesn't create extra DOM attributes
 * such as data-react-id that React uses internally.
 * See https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup
 */

function renderToStaticMarkup(element) {
  var renderer = new ReactDOMServerRenderer(element, true);

  try {
    var markup = renderer.read(Infinity);
    return markup;
  } finally {
    renderer.destroy();
  }
}

function renderToNodeStream() {
  {
    {
      throw Error( "ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead." );
    }
  }
}

function renderToStaticNodeStream() {
  {
    {
      throw Error( "ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead." );
    }
  }
} // Note: when changing this, also consider https://github.com/facebook/react/issues/11526


var ReactDOMServer = {
  renderToString: renderToString,
  renderToStaticMarkup: renderToStaticMarkup,
  renderToNodeStream: renderToNodeStream,
  renderToStaticNodeStream: renderToStaticNodeStream,
  version: ReactVersion
};

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest


var server_browser = ReactDOMServer.default || ReactDOMServer;

module.exports = server_browser;
  })();
}


/***/ }),

/***/ "../../node_modules/react-dom/server.browser.js":
/*!*************************************************************************************************************************************!*\
  !*** E:/satiwan/Project_Pick_bazar/Pickbazar - React GraphQL Ecommerce Template/pickbazar/node_modules/react-dom/server.browser.js ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-dom-server.browser.development.js */ "../../node_modules/react-dom/cjs/react-dom-server.browser.development.js");
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRTovc2F0aXdhbi9Qcm9qZWN0X1BpY2tfYmF6YXIvUGlja2JhemFyIC0gUmVhY3QgR3JhcGhRTCBFY29tbWVyY2UgVGVtcGxhdGUvcGlja2JhemFyL25vZGVfbW9kdWxlcy9AYXBvbGxvL3JlYWN0LXNzci9saWIvcmVhY3Qtc3NyLmVzbS5qcyIsIndlYnBhY2s6Ly8vRTovc2F0aXdhbi9Qcm9qZWN0X1BpY2tfYmF6YXIvUGlja2JhemFyIC0gUmVhY3QgR3JhcGhRTCBFY29tbWVyY2UgVGVtcGxhdGUvcGlja2JhemFyL25vZGVfbW9kdWxlcy9AYXBvbGxvL3JlYWN0LXNzci9ub2RlX21vZHVsZXMvQGFwb2xsby9yZWFjdC1ob29rcy9saWIvcmVhY3QtaG9va3MuZXNtLmpzIiwid2VicGFjazovLy9FOi9zYXRpd2FuL1Byb2plY3RfUGlja19iYXphci9QaWNrYmF6YXIgLSBSZWFjdCBHcmFwaFFMIEVjb21tZXJjZSBUZW1wbGF0ZS9waWNrYmF6YXIvbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9janMvcmVhY3QtZG9tLXNlcnZlci5icm93c2VyLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy9FOi9zYXRpd2FuL1Byb2plY3RfUGlja19iYXphci9QaWNrYmF6YXIgLSBSZWFjdCBHcmFwaFFMIEVjb21tZXJjZSBUZW1wbGF0ZS9waWNrYmF6YXIvbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9zZXJ2ZXIuYnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWlDO0FBQ1A7QUFDOEI7QUFDSDs7QUFFckQ7QUFDQSw2QkFBNkIsY0FBYztBQUMzQztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUJBQU8sQ0FBQyx3RUFBa0I7QUFDbEQsS0FBSztBQUNMO0FBQ0E7QUFDQSxxRUFBcUUsZ0VBQWdFLG1CQUFPLENBQUMsd0VBQWtCO0FBQy9KLDZCQUE2QixrRUFBYztBQUMzQztBQUNBLDRCQUE0Qiw2RUFBZ0I7QUFDNUMsa0NBQWtDLDRDQUFLLHdDQUF3QyxRQUFRLHNEQUFRLENBQUMsc0RBQVEsR0FBRyxhQUFhLGlDQUFpQyxHQUFHO0FBQzVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUJBQU8sQ0FBQyx3RUFBa0I7QUFDbEQsS0FBSztBQUNMOztBQUVzRTtBQUN0RTs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2RjtBQUNlO0FBQ2hFO0FBQ3VDO0FBQ3hCO0FBQ3JCO0FBQ0c7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHVCQUF1QjtBQUM5RCw4QkFBOEIsMkRBQUs7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLE1BQXFDLEdBQUcsU0FBc0IsR0FBRyw4REFBUztBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1FQUFNO0FBQzlCLG9DQUFvQywwRUFBYTtBQUNqRCxnQ0FBZ0MsMEVBQWE7QUFDN0MsUUFBUSxNQUFxQyxHQUFHLFNBQXFDLEdBQUcsOERBQVM7QUFDakc7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLElBQUksdURBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELGtFQUFrRTtBQUM1SCxpREFBaUQseURBQXlEO0FBQzFHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELCtEQUErRDtBQUN0SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMkRBQWE7QUFDaEQ7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHNEQUFRLENBQUMsc0RBQVEsR0FBRztBQUNwRCw4QkFBOEIsc0RBQVEsQ0FBQyxzREFBUSxHQUFHO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixzREFBUSxFQUFFLCtCQUErQiwyREFBYSw0RUFBNEU7QUFDM0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsaUVBQVk7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxzREFBUSxDQUFDLHNEQUFRLEdBQUcsYUFBYSxnRUFBZ0Usa0JBQWtCLDJCQUEyQixFQUFFLEVBQUU7QUFDaks7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxzREFBUSxDQUFDLHNEQUFRLEdBQUcsNEJBQTRCLGlCQUFpQjtBQUN4SCxrRkFBa0Ysc0RBQVEsR0FBRztBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxzREFBUSxDQUFDLHNEQUFRLEdBQUcsMENBQTBDLGlCQUFpQjtBQUN2SCxhQUFhLDJEQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxFQUFFO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMkRBQUs7QUFDekI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyREFBSztBQUMxQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0RBQVEsQ0FBQyxzREFBUSxHQUFHLFlBQVksa0VBQWtFO0FBQ3ZIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix5REFBVyxFQUFFLHdCQUF3QjtBQUNqRTtBQUNBLHFCQUFxQixzREFBUSxDQUFDLHNEQUFRLEdBQUcsWUFBWTtBQUNyRDtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixzREFBUSxDQUFDLHNEQUFRLEdBQUc7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFO0FBQzdFO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLDJEQUFhO0FBQ3BELHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDJEQUFLO0FBQ3JCLGdCQUFnQiwyREFBSztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLGNBQWMsb0RBQU07QUFDcEIseUJBQXlCLDJEQUFLO0FBQzlCLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsY0FBYztBQUN4QyxrQkFBa0Isd0RBQVUsQ0FBQyw2RUFBZ0I7QUFDN0MsYUFBYSx3REFBVSxlQUFlLGNBQWMsRUFBRTtBQUN0RCxtQ0FBbUMsc0RBQVEsQ0FBQyxzREFBUSxHQUFHLGFBQWEsZUFBZSxLQUFLO0FBQ3hGLHVCQUF1QixvREFBTTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsc0RBQVEsQ0FBQyxzREFBUSxHQUFHLG9CQUFvQiw2Q0FBNkM7QUFDdEc7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLCtEQUErRCxFQUFFO0FBQzNHO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNEJBQTRCO0FBQ3hELEtBQUs7QUFDTCxJQUFJLHVEQUFTLGNBQWMsZ0NBQWdDLGFBQWEsRUFBRSxFQUFFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHVEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsOEJBQThCO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLG1EQUFtRCxpRUFBWTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxpRUFBWTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJNQUEyTTtBQUMzTSw0QkFBNEIsc0RBQVEsR0FBRztBQUN2Qyw4Q0FBOEM7QUFDOUM7QUFDQSxrREFBa0Qsc0RBQVEsRUFBRTtBQUM1RDtBQUNBLDRHQUE0RztBQUM1RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix5REFBVyxFQUFFLHdCQUF3QjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDJEQUFLO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0Esa0JBQWtCLHdEQUFVLENBQUMsNkVBQWdCO0FBQzdDLGFBQWEsc0RBQVEsRUFBRSxnQ0FBZ0M7QUFDdkQsbUNBQW1DLHNEQUFRLENBQUMsc0RBQVEsR0FBRyxhQUFhLHFCQUFxQixLQUFLO0FBQzlGLDBCQUEwQixvREFBTTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFTLGNBQWMsb0NBQW9DLEVBQUU7QUFDakU7QUFDQTs7QUFFQTtBQUNBLElBQUksdURBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMkRBQUs7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHNEQUFRLENBQUMsc0RBQVEsR0FBRyxtQkFBbUIseUNBQXlDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLGtCQUFrQix3REFBVSxDQUFDLDZFQUFnQjtBQUM3QztBQUNBLFVBQVUsc0RBQVEsQ0FBQyxzREFBUSxHQUFHLGFBQWEsNkJBQTZCLEtBQUs7QUFDN0UsYUFBYSxzREFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsOEJBQThCLG9EQUFNO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFTLGNBQWMsd0NBQXdDLEVBQUU7QUFDckUsSUFBSSx1REFBUyxjQUFjLHdEQUF3RCxFQUFFO0FBQ3JGO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsNENBQUssWUFBWSw2RUFBZ0I7QUFDbEQsSUFBSSxNQUFxQyxHQUFHLFNBQW9CLEdBQUcsOERBQVM7QUFDNUU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFZ0c7QUFDakc7Ozs7Ozs7Ozs7Ozs7QUN2dUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7Ozs7QUFJYixJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7O0FBRUEsWUFBWSxtQkFBTyxDQUFDLGdEQUFPO0FBQzNCLGNBQWMsbUJBQU8sQ0FBQyxvRkFBZTtBQUNyQyxxQkFBcUIsbUJBQU8sQ0FBQyxrRkFBMkI7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBOztBQUVBLDZDQUE2QztBQUM3Qzs7QUFFQTs7QUFFQSxvRkFBb0Y7QUFDcEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBGQUEwRixhQUFhO0FBQ3ZHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhGQUE4RixlQUFlO0FBQzdHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUCxpREFBaUQ7QUFDakQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGVBQWU7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0lBQStJOztBQUUvSTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYLG9FQUFvRSw0Q0FBNEM7QUFDaEg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGVBQWUsUUFBUTtBQUN2QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLGtCQUFrQjtBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCO0FBQzFCO0FBQ0E7O0FBRUEsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7O0FBRUEsZ0JBQWdCO0FBQ2hCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7O0FBR0Esb0JBQW9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLG9CQUFvQjtBQUMvQztBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLEVBQUUsOEJBQThCOztBQUV4RDs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFlBQVksT0FBTztBQUNuQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixZQUFZLE9BQU87QUFDbkI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYixZQUFZLFFBQVE7QUFDcEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsRUFBRTtBQUNiLFlBQVksT0FBTztBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDhCQUE4Qjs7QUFFOUIsdUJBQXVCOztBQUV2Qix5Q0FBeUM7O0FBRXpDLDhCQUE4Qjs7QUFFOUI7QUFDQTtBQUNBLGtDQUFrQzs7QUFFbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLDRDQUE0QztBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHlCQUF5Qjs7QUFFekI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRFQUE0RSxZQUFZO0FBQ3hGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwySEFBMkgsNkJBQTZCO0FBQ3hKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLDRDQUE0QztBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsRUFBRTtBQUNiLFlBQVksT0FBTztBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qjs7QUFFOUIsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0ZBQWtGO0FBQ2xGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU8sMENBQTBDOzs7QUFHakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0ZBQStGO0FBQy9GOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sMENBQTBDOzs7QUFHakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQSxtQ0FBbUMsRUFBRTs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZFQUE2RTs7QUFFN0U7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzSkFBc0osaUJBQWlCO0FBQ3ZLLE9BQU87QUFDUCxzSkFBc0osaUJBQWlCLHdEQUF3RCxtQkFBbUIsZ0JBQWdCLDhCQUE4QjtBQUNoUzs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQSxvR0FBb0csR0FBRzs7QUFFdkc7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0VBQWtFOztBQUVsRSx3Q0FBd0M7O0FBRXhDLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQSxtQkFBbUI7O0FBRW5CLG1DQUFtQyxRQUFRO0FBQzNDLDRCQUE0QjtBQUM1QjtBQUNBOztBQUVBOztBQUVBLGlEQUFpRCxTQUFTO0FBQzFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQSxvREFBb0Q7O0FBRXBEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSwwQ0FBMEMscUJBQXFCO0FBQy9EOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QyxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQzs7QUFFMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVDQUF1QyxZQUFZO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0M7O0FBRWhDOztBQUVBO0FBQ0E7QUFDQSw0SkFBNEosU0FBMkI7QUFDdkw7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDs7QUFFckQ7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFdBQVc7OztBQUdYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDOztBQUU1QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnUEFBZ1AsU0FBMkI7QUFDM1E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYixrQkFBa0IsSUFBTTtBQUN4QjtBQUNBLHVGQUF1RixTQUEyQjtBQUNsSDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7O0FBR1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDhDQUE4Qzs7QUFFOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBLHVCQUF1QiwyQkFBMkI7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHlCQUF5Qix3QkFBd0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQzE4SGE7O0FBRWIsSUFBSSxLQUFxQyxFQUFFLEVBRTFDO0FBQ0QsbUJBQW1CLG1CQUFPLENBQUMsK0hBQStDO0FBQzFFIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9fYXNzaWduIH0gZnJvbSAndHNsaWInO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldEFwb2xsb0NvbnRleHQgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWNvbW1vbic7XG5pbXBvcnQgeyBSZW5kZXJQcm9taXNlcyB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xuXG5mdW5jdGlvbiBnZXREYXRhRnJvbVRyZWUodHJlZSwgY29udGV4dCkge1xuICAgIGlmIChjb250ZXh0ID09PSB2b2lkIDApIHsgY29udGV4dCA9IHt9OyB9XG4gICAgcmV0dXJuIGdldE1hcmt1cEZyb21UcmVlKHtcbiAgICAgICAgdHJlZTogdHJlZSxcbiAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgcmVuZGVyRnVuY3Rpb246IHJlcXVpcmUoJ3JlYWN0LWRvbS9zZXJ2ZXInKS5yZW5kZXJUb1N0YXRpY01hcmt1cFxuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0TWFya3VwRnJvbVRyZWUoX2EpIHtcbiAgICB2YXIgdHJlZSA9IF9hLnRyZWUsIF9iID0gX2EuY29udGV4dCwgY29udGV4dCA9IF9iID09PSB2b2lkIDAgPyB7fSA6IF9iLCBfYyA9IF9hLnJlbmRlckZ1bmN0aW9uLCByZW5kZXJGdW5jdGlvbiA9IF9jID09PSB2b2lkIDAgPyByZXF1aXJlKCdyZWFjdC1kb20vc2VydmVyJykucmVuZGVyVG9TdGF0aWNNYXJrdXAgOiBfYztcbiAgICB2YXIgcmVuZGVyUHJvbWlzZXMgPSBuZXcgUmVuZGVyUHJvbWlzZXMoKTtcbiAgICBmdW5jdGlvbiBwcm9jZXNzKCkge1xuICAgICAgICB2YXIgQXBvbGxvQ29udGV4dCA9IGdldEFwb2xsb0NvbnRleHQoKTtcbiAgICAgICAgdmFyIGh0bWwgPSByZW5kZXJGdW5jdGlvbihSZWFjdC5jcmVhdGVFbGVtZW50KEFwb2xsb0NvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBjb250ZXh0KSwgeyByZW5kZXJQcm9taXNlczogcmVuZGVyUHJvbWlzZXMgfSkgfSwgdHJlZSkpO1xuICAgICAgICByZXR1cm4gcmVuZGVyUHJvbWlzZXMuaGFzUHJvbWlzZXMoKVxuICAgICAgICAgICAgPyByZW5kZXJQcm9taXNlcy5jb25zdW1lQW5kQXdhaXRQcm9taXNlcygpLnRoZW4ocHJvY2VzcylcbiAgICAgICAgICAgIDogaHRtbDtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4ocHJvY2Vzcyk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRvU3RyaW5nV2l0aERhdGEoY29tcG9uZW50KSB7XG4gICAgcmV0dXJuIGdldE1hcmt1cEZyb21UcmVlKHtcbiAgICAgICAgdHJlZTogY29tcG9uZW50LFxuICAgICAgICByZW5kZXJGdW5jdGlvbjogcmVxdWlyZSgncmVhY3QtZG9tL3NlcnZlcicpLnJlbmRlclRvU3RyaW5nXG4gICAgfSk7XG59XG5cbmV4cG9ydCB7IGdldERhdGFGcm9tVHJlZSwgZ2V0TWFya3VwRnJvbVRyZWUsIHJlbmRlclRvU3RyaW5nV2l0aERhdGEgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlYWN0LXNzci5lc20uanMubWFwXG4iLCJpbXBvcnQgeyBwYXJzZXIsIG9wZXJhdGlvbk5hbWUsIERvY3VtZW50VHlwZSwgZ2V0QXBvbGxvQ29udGV4dCB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtY29tbW9uJztcbmV4cG9ydCB7IEFwb2xsb0NvbnN1bWVyLCBBcG9sbG9Qcm92aWRlciwgZ2V0QXBvbGxvQ29udGV4dCwgcmVzZXRBcG9sbG9Db250ZXh0IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1jb21tb24nO1xuaW1wb3J0IHsgX19leHRlbmRzLCBfX2Fzc2lnbiB9IGZyb20gJ3RzbGliJztcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBOZXR3b3JrU3RhdHVzLCBBcG9sbG9FcnJvciB9IGZyb20gJ2Fwb2xsby1jbGllbnQnO1xuaW1wb3J0IHsgZXF1YWwgfSBmcm9tICdAd3J5L2VxdWFsaXR5JztcbmltcG9ydCB7IGludmFyaWFudCB9IGZyb20gJ3RzLWludmFyaWFudCc7XG5cbnZhciBPcGVyYXRpb25EYXRhID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBPcGVyYXRpb25EYXRhKG9wdGlvbnMsIGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5pc01vdW50ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcmV2aW91c09wdGlvbnMgPSB7fTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0ge307XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHt9O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0IHx8IHt9O1xuICAgIH1cbiAgICBPcGVyYXRpb25EYXRhLnByb3RvdHlwZS5nZXRPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zO1xuICAgIH07XG4gICAgT3BlcmF0aW9uRGF0YS5wcm90b3R5cGUuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uIChuZXdPcHRpb25zLCBzdG9yZVByZXZpb3VzKSB7XG4gICAgICAgIGlmIChzdG9yZVByZXZpb3VzID09PSB2b2lkIDApIHsgc3RvcmVQcmV2aW91cyA9IGZhbHNlOyB9XG4gICAgICAgIGlmIChzdG9yZVByZXZpb3VzICYmICFlcXVhbCh0aGlzLm9wdGlvbnMsIG5ld09wdGlvbnMpKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzT3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBuZXdPcHRpb25zO1xuICAgIH07XG4gICAgT3BlcmF0aW9uRGF0YS5wcm90b3R5cGUudW5tb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc01vdW50ZWQgPSBmYWxzZTtcbiAgICB9O1xuICAgIE9wZXJhdGlvbkRhdGEucHJvdG90eXBlLnJlZnJlc2hDbGllbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjbGllbnQgPSAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5jbGllbnQpIHx8XG4gICAgICAgICAgICAodGhpcy5jb250ZXh0ICYmIHRoaXMuY29udGV4dC5jbGllbnQpO1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoISFjbGllbnQsIDIpIDogaW52YXJpYW50KCEhY2xpZW50LCAnQ291bGQgbm90IGZpbmQgXCJjbGllbnRcIiBpbiB0aGUgY29udGV4dCBvciBwYXNzZWQgaW4gYXMgYW4gb3B0aW9uLiAnICtcbiAgICAgICAgICAgICdXcmFwIHRoZSByb290IGNvbXBvbmVudCBpbiBhbiA8QXBvbGxvUHJvdmlkZXI+LCBvciBwYXNzIGFuICcgK1xuICAgICAgICAgICAgJ0Fwb2xsb0NsaWVudCBpbnN0YW5jZSBpbiB2aWEgb3B0aW9ucy4nKTtcbiAgICAgICAgdmFyIGlzTmV3ID0gZmFsc2U7XG4gICAgICAgIGlmIChjbGllbnQgIT09IHRoaXMuY2xpZW50KSB7XG4gICAgICAgICAgICBpc05ldyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICAgICAgICAgIHRoaXMuY2xlYW51cCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICAgICAgaXNOZXc6IGlzTmV3XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBPcGVyYXRpb25EYXRhLnByb3RvdHlwZS52ZXJpZnlEb2N1bWVudFR5cGUgPSBmdW5jdGlvbiAoZG9jdW1lbnQsIHR5cGUpIHtcbiAgICAgICAgdmFyIG9wZXJhdGlvbiA9IHBhcnNlcihkb2N1bWVudCk7XG4gICAgICAgIHZhciByZXF1aXJlZE9wZXJhdGlvbk5hbWUgPSBvcGVyYXRpb25OYW1lKHR5cGUpO1xuICAgICAgICB2YXIgdXNlZE9wZXJhdGlvbk5hbWUgPSBvcGVyYXRpb25OYW1lKG9wZXJhdGlvbi50eXBlKTtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KG9wZXJhdGlvbi50eXBlID09PSB0eXBlLCAzKSA6IGludmFyaWFudChvcGVyYXRpb24udHlwZSA9PT0gdHlwZSwgXCJSdW5uaW5nIGEgXCIgKyByZXF1aXJlZE9wZXJhdGlvbk5hbWUgKyBcIiByZXF1aXJlcyBhIGdyYXBocWwgXCIgK1xuICAgICAgICAgICAgKHJlcXVpcmVkT3BlcmF0aW9uTmFtZSArIFwiLCBidXQgYSBcIiArIHVzZWRPcGVyYXRpb25OYW1lICsgXCIgd2FzIHVzZWQgaW5zdGVhZC5cIikpO1xuICAgIH07XG4gICAgcmV0dXJuIE9wZXJhdGlvbkRhdGE7XG59KCkpO1xuXG52YXIgUXVlcnlEYXRhID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUXVlcnlEYXRhLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFF1ZXJ5RGF0YShfYSkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IF9hLm9wdGlvbnMsIGNvbnRleHQgPSBfYS5jb250ZXh0LCBvbk5ld0RhdGEgPSBfYS5vbk5ld0RhdGE7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMsIGNvbnRleHQpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnByZXZpb3VzRGF0YSA9IHt9O1xuICAgICAgICBfdGhpcy5jdXJyZW50T2JzZXJ2YWJsZSA9IHt9O1xuICAgICAgICBfdGhpcy5ydW5MYXp5ID0gZmFsc2U7XG4gICAgICAgIF90aGlzLnJ1bkxhenlRdWVyeSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgICAgICBfdGhpcy5jbGVhbnVwKCk7XG4gICAgICAgICAgICBfdGhpcy5ydW5MYXp5ID0gdHJ1ZTtcbiAgICAgICAgICAgIF90aGlzLmxhenlPcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgICAgIF90aGlzLm9uTmV3RGF0YSgpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5nZXRFeGVjdXRlUmVzdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IF90aGlzLmdldFF1ZXJ5UmVzdWx0KCk7XG4gICAgICAgICAgICBfdGhpcy5zdGFydFF1ZXJ5U3Vic2NyaXB0aW9uKCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5vYnNSZWZldGNoID0gZnVuY3Rpb24gKHZhcmlhYmxlcykge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnF1ZXJ5LnJlZmV0Y2godmFyaWFibGVzKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMub2JzRmV0Y2hNb3JlID0gZnVuY3Rpb24gKGZldGNoTW9yZU9wdGlvbnMpIHsgcmV0dXJuIF90aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnF1ZXJ5LmZldGNoTW9yZShmZXRjaE1vcmVPcHRpb25zKTsgfTtcbiAgICAgICAgX3RoaXMub2JzVXBkYXRlUXVlcnkgPSBmdW5jdGlvbiAobWFwRm4pIHsgcmV0dXJuIF90aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnF1ZXJ5LnVwZGF0ZVF1ZXJ5KG1hcEZuKTsgfTtcbiAgICAgICAgX3RoaXMub2JzU3RhcnRQb2xsaW5nID0gZnVuY3Rpb24gKHBvbGxJbnRlcnZhbCkge1xuICAgICAgICAgICAgX3RoaXMuY3VycmVudE9ic2VydmFibGUgJiZcbiAgICAgICAgICAgICAgICBfdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5xdWVyeSAmJlxuICAgICAgICAgICAgICAgIF90aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnF1ZXJ5LnN0YXJ0UG9sbGluZyhwb2xsSW50ZXJ2YWwpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5vYnNTdG9wUG9sbGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmN1cnJlbnRPYnNlcnZhYmxlICYmXG4gICAgICAgICAgICAgICAgX3RoaXMuY3VycmVudE9ic2VydmFibGUucXVlcnkgJiZcbiAgICAgICAgICAgICAgICBfdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5xdWVyeS5zdG9wUG9sbGluZygpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5vYnNTdWJzY3JpYmVUb01vcmUgPSBmdW5jdGlvbiAob3B0aW9ucykgeyByZXR1cm4gX3RoaXMuY3VycmVudE9ic2VydmFibGUucXVlcnkuc3Vic2NyaWJlVG9Nb3JlKG9wdGlvbnMpOyB9O1xuICAgICAgICBfdGhpcy5vbk5ld0RhdGEgPSBvbk5ld0RhdGE7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgUXVlcnlEYXRhLnByb3RvdHlwZS5leGVjdXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJlZnJlc2hDbGllbnQoKTtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5nZXRPcHRpb25zKCksIHNraXAgPSBfYS5za2lwLCBxdWVyeSA9IF9hLnF1ZXJ5O1xuICAgICAgICBpZiAoc2tpcCB8fCBxdWVyeSAhPT0gdGhpcy5wcmV2aW91c0RhdGEucXVlcnkpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlUXVlcnlTdWJzY3JpcHRpb24oKTtcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNEYXRhLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVPYnNlcnZhYmxlUXVlcnkoKTtcbiAgICAgICAgaWYgKHRoaXMuaXNNb3VudGVkKVxuICAgICAgICAgICAgdGhpcy5zdGFydFF1ZXJ5U3Vic2NyaXB0aW9uKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEV4ZWN1dGVTc3JSZXN1bHQoKSB8fCB0aGlzLmdldEV4ZWN1dGVSZXN1bHQoKTtcbiAgICB9O1xuICAgIFF1ZXJ5RGF0YS5wcm90b3R5cGUuZXhlY3V0ZUxhenkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5ydW5MYXp5XG4gICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bkxhenlRdWVyeSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBuZXR3b3JrU3RhdHVzOiBOZXR3b3JrU3RhdHVzLnJlYWR5LFxuICAgICAgICAgICAgICAgICAgICBjYWxsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICAgIDogW3RoaXMucnVuTGF6eVF1ZXJ5LCB0aGlzLmV4ZWN1dGUoKV07XG4gICAgfTtcbiAgICBRdWVyeURhdGEucHJvdG90eXBlLmZldGNoRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLmdldE9wdGlvbnMoKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuc2tpcCB8fCBvcHRpb25zLnNzciA9PT0gZmFsc2UpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBvYnMgPSB0aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnF1ZXJ5O1xuICAgICAgICB2YXIgY3VycmVudFJlc3VsdCA9IG9icy5nZXRDdXJyZW50UmVzdWx0KCk7XG4gICAgICAgIHJldHVybiBjdXJyZW50UmVzdWx0LmxvYWRpbmcgPyBvYnMucmVzdWx0KCkgOiBmYWxzZTtcbiAgICB9O1xuICAgIFF1ZXJ5RGF0YS5wcm90b3R5cGUuYWZ0ZXJFeGVjdXRlID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBfYiA9IChfYSA9PT0gdm9pZCAwID8ge30gOiBfYSkubGF6eSwgbGF6eSA9IF9iID09PSB2b2lkIDAgPyBmYWxzZSA6IF9iO1xuICAgICAgICB0aGlzLmlzTW91bnRlZCA9IHRydWU7XG4gICAgICAgIGlmICghbGF6eSB8fCB0aGlzLnJ1bkxhenkpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3JPckNvbXBsZXRlZCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJldmlvdXNPcHRpb25zID0gdGhpcy5nZXRPcHRpb25zKCk7XG4gICAgICAgIHJldHVybiB0aGlzLnVubW91bnQuYmluZCh0aGlzKTtcbiAgICB9O1xuICAgIFF1ZXJ5RGF0YS5wcm90b3R5cGUuY2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVRdWVyeVN1YnNjcmlwdGlvbigpO1xuICAgICAgICBkZWxldGUgdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5xdWVyeTtcbiAgICAgICAgZGVsZXRlIHRoaXMucHJldmlvdXNEYXRhLnJlc3VsdDtcbiAgICB9O1xuICAgIFF1ZXJ5RGF0YS5wcm90b3R5cGUuZ2V0T3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBfc3VwZXIucHJvdG90eXBlLmdldE9wdGlvbnMuY2FsbCh0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMubGF6eU9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMudmFyaWFibGVzID0gX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbnMudmFyaWFibGVzKSwgdGhpcy5sYXp5T3B0aW9ucy52YXJpYWJsZXMpO1xuICAgICAgICAgICAgb3B0aW9ucy5jb250ZXh0ID0gX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbnMuY29udGV4dCksIHRoaXMubGF6eU9wdGlvbnMuY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucnVuTGF6eSkge1xuICAgICAgICAgICAgZGVsZXRlIG9wdGlvbnMuc2tpcDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9O1xuICAgIFF1ZXJ5RGF0YS5wcm90b3R5cGUuc3NySW5pdGlhdGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0ICYmIHRoaXMuY29udGV4dC5yZW5kZXJQcm9taXNlcztcbiAgICB9O1xuICAgIFF1ZXJ5RGF0YS5wcm90b3R5cGUuZ2V0RXhlY3V0ZVNzclJlc3VsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNzckRpc2FibGVkID0gdGhpcy5nZXRPcHRpb25zKCkuc3NyID09PSBmYWxzZTtcbiAgICAgICAgdmFyIGZldGNoRGlzYWJsZWQgPSB0aGlzLnJlZnJlc2hDbGllbnQoKS5jbGllbnQuZGlzYWJsZU5ldHdvcmtGZXRjaGVzO1xuICAgICAgICB2YXIgc3NyTG9hZGluZyA9IF9fYXNzaWduKHsgbG9hZGluZzogdHJ1ZSwgbmV0d29ya1N0YXR1czogTmV0d29ya1N0YXR1cy5sb2FkaW5nLCBjYWxsZWQ6IHRydWUsIGRhdGE6IHVuZGVmaW5lZCwgc3RhbGU6IGZhbHNlLCBjbGllbnQ6IHRoaXMuY2xpZW50IH0sIHRoaXMub2JzZXJ2YWJsZVF1ZXJ5RmllbGRzKCkpO1xuICAgICAgICBpZiAoc3NyRGlzYWJsZWQgJiYgKHRoaXMuc3NySW5pdGlhdGVkKCkgfHwgZmV0Y2hEaXNhYmxlZCkpIHtcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNEYXRhLnJlc3VsdCA9IHNzckxvYWRpbmc7XG4gICAgICAgICAgICByZXR1cm4gc3NyTG9hZGluZztcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICBpZiAodGhpcy5zc3JJbml0aWF0ZWQoKSkge1xuICAgICAgICAgICAgcmVzdWx0ID1cbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQucmVuZGVyUHJvbWlzZXMuYWRkUXVlcnlQcm9taXNlKHRoaXMsIHRoaXMuZ2V0RXhlY3V0ZVJlc3VsdCkgfHwgc3NyTG9hZGluZztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgUXVlcnlEYXRhLnByb3RvdHlwZS5wcmVwYXJlT2JzZXJ2YWJsZVF1ZXJ5T3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLmdldE9wdGlvbnMoKTtcbiAgICAgICAgdGhpcy52ZXJpZnlEb2N1bWVudFR5cGUob3B0aW9ucy5xdWVyeSwgRG9jdW1lbnRUeXBlLlF1ZXJ5KTtcbiAgICAgICAgdmFyIGRpc3BsYXlOYW1lID0gb3B0aW9ucy5kaXNwbGF5TmFtZSB8fCAnUXVlcnknO1xuICAgICAgICBpZiAodGhpcy5zc3JJbml0aWF0ZWQoKSAmJlxuICAgICAgICAgICAgKG9wdGlvbnMuZmV0Y2hQb2xpY3kgPT09ICduZXR3b3JrLW9ubHknIHx8XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5mZXRjaFBvbGljeSA9PT0gJ2NhY2hlLWFuZC1uZXR3b3JrJykpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuZmV0Y2hQb2xpY3kgPSAnY2FjaGUtZmlyc3QnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgZGlzcGxheU5hbWU6IGRpc3BsYXlOYW1lLCBjb250ZXh0OiBvcHRpb25zLmNvbnRleHQsIG1ldGFkYXRhOiB7IHJlYWN0Q29tcG9uZW50OiB7IGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZSB9IH0gfSk7XG4gICAgfTtcbiAgICBRdWVyeURhdGEucHJvdG90eXBlLmluaXRpYWxpemVPYnNlcnZhYmxlUXVlcnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGlmICh0aGlzLnNzckluaXRpYXRlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnF1ZXJ5ID0gdGhpcy5jb250ZXh0LnJlbmRlclByb21pc2VzLmdldFNTUk9ic2VydmFibGUodGhpcy5nZXRPcHRpb25zKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5xdWVyeSkge1xuICAgICAgICAgICAgdmFyIG9ic2VydmFibGVRdWVyeU9wdGlvbnMgPSB0aGlzLnByZXBhcmVPYnNlcnZhYmxlUXVlcnlPcHRpb25zKCk7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzRGF0YS5vYnNlcnZhYmxlUXVlcnlPcHRpb25zID0gX19hc3NpZ24oX19hc3NpZ24oe30sIG9ic2VydmFibGVRdWVyeU9wdGlvbnMpLCB7IGNoaWxkcmVuOiBudWxsIH0pO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5xdWVyeSA9IHRoaXMucmVmcmVzaENsaWVudCgpLmNsaWVudC53YXRjaFF1ZXJ5KF9fYXNzaWduKHt9LCBvYnNlcnZhYmxlUXVlcnlPcHRpb25zKSk7XG4gICAgICAgICAgICBpZiAodGhpcy5zc3JJbml0aWF0ZWQoKSkge1xuICAgICAgICAgICAgICAgIChfYiA9IChfYSA9IHRoaXMuY29udGV4dCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlbmRlclByb21pc2VzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IucmVnaXN0ZXJTU1JPYnNlcnZhYmxlKHRoaXMuY3VycmVudE9ic2VydmFibGUucXVlcnksIG9ic2VydmFibGVRdWVyeU9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBRdWVyeURhdGEucHJvdG90eXBlLnVwZGF0ZU9ic2VydmFibGVRdWVyeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnF1ZXJ5KSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVPYnNlcnZhYmxlUXVlcnkoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbmV3T2JzZXJ2YWJsZVF1ZXJ5T3B0aW9ucyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGlzLnByZXBhcmVPYnNlcnZhYmxlUXVlcnlPcHRpb25zKCkpLCB7IGNoaWxkcmVuOiBudWxsIH0pO1xuICAgICAgICBpZiAoIWVxdWFsKG5ld09ic2VydmFibGVRdWVyeU9wdGlvbnMsIHRoaXMucHJldmlvdXNEYXRhLm9ic2VydmFibGVRdWVyeU9wdGlvbnMpKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzRGF0YS5vYnNlcnZhYmxlUXVlcnlPcHRpb25zID0gbmV3T2JzZXJ2YWJsZVF1ZXJ5T3B0aW9ucztcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE9ic2VydmFibGVcbiAgICAgICAgICAgICAgICAucXVlcnkuc2V0T3B0aW9ucyhuZXdPYnNlcnZhYmxlUXVlcnlPcHRpb25zKVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoKSB7IH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBRdWVyeURhdGEucHJvdG90eXBlLnN0YXJ0UXVlcnlTdWJzY3JpcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnN1YnNjcmlwdGlvbiB8fCB0aGlzLmdldE9wdGlvbnMoKS5za2lwKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgb2JzUXVlcnkgPSB0aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnF1ZXJ5O1xuICAgICAgICB0aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnN1YnNjcmlwdGlvbiA9IG9ic1F1ZXJ5LnN1YnNjcmliZSh7XG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICB2YXIgbG9hZGluZyA9IF9hLmxvYWRpbmcsIG5ldHdvcmtTdGF0dXMgPSBfYS5uZXR3b3JrU3RhdHVzLCBkYXRhID0gX2EuZGF0YTtcbiAgICAgICAgICAgICAgICB2YXIgcHJldmlvdXNSZXN1bHQgPSBfdGhpcy5wcmV2aW91c0RhdGEucmVzdWx0O1xuICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c1Jlc3VsdCAmJlxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1Jlc3VsdC5sb2FkaW5nID09PSBsb2FkaW5nICYmXG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzUmVzdWx0Lm5ldHdvcmtTdGF0dXMgPT09IG5ldHdvcmtTdGF0dXMgJiZcbiAgICAgICAgICAgICAgICAgICAgZXF1YWwocHJldmlvdXNSZXN1bHQuZGF0YSwgZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdGhpcy5vbk5ld0RhdGEoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVzdWJzY3JpYmVUb1F1ZXJ5KCk7XG4gICAgICAgICAgICAgICAgaWYgKCFlcnJvci5oYXNPd25Qcm9wZXJ0eSgnZ3JhcGhRTEVycm9ycycpKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB2YXIgcHJldmlvdXNSZXN1bHQgPSBfdGhpcy5wcmV2aW91c0RhdGEucmVzdWx0O1xuICAgICAgICAgICAgICAgIGlmICgocHJldmlvdXNSZXN1bHQgJiYgcHJldmlvdXNSZXN1bHQubG9hZGluZykgfHxcbiAgICAgICAgICAgICAgICAgICAgIWVxdWFsKGVycm9yLCBfdGhpcy5wcmV2aW91c0RhdGEuZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnByZXZpb3VzRGF0YS5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5vbk5ld0RhdGEoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFF1ZXJ5RGF0YS5wcm90b3R5cGUucmVzdWJzY3JpYmVUb1F1ZXJ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJlbW92ZVF1ZXJ5U3Vic2NyaXB0aW9uKCk7XG4gICAgICAgIHZhciBsYXN0RXJyb3IgPSB0aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnF1ZXJ5LmdldExhc3RFcnJvcigpO1xuICAgICAgICB2YXIgbGFzdFJlc3VsdCA9IHRoaXMuY3VycmVudE9ic2VydmFibGUucXVlcnkuZ2V0TGFzdFJlc3VsdCgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnF1ZXJ5LnJlc2V0TGFzdFJlc3VsdHMoKTtcbiAgICAgICAgdGhpcy5zdGFydFF1ZXJ5U3Vic2NyaXB0aW9uKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5xdWVyeSwge1xuICAgICAgICAgICAgbGFzdEVycm9yOiBsYXN0RXJyb3IsXG4gICAgICAgICAgICBsYXN0UmVzdWx0OiBsYXN0UmVzdWx0LFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFF1ZXJ5RGF0YS5wcm90b3R5cGUuZ2V0UXVlcnlSZXN1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLm9ic2VydmFibGVRdWVyeUZpZWxkcygpO1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHRoaXMuZ2V0T3B0aW9ucygpO1xuICAgICAgICBpZiAob3B0aW9ucy5za2lwKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcmVzdWx0KSwgeyBkYXRhOiB1bmRlZmluZWQsIGVycm9yOiB1bmRlZmluZWQsIGxvYWRpbmc6IGZhbHNlLCBjYWxsZWQ6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudFJlc3VsdCA9IHRoaXMuY3VycmVudE9ic2VydmFibGUucXVlcnkuZ2V0Q3VycmVudFJlc3VsdCgpO1xuICAgICAgICAgICAgdmFyIGxvYWRpbmcgPSBjdXJyZW50UmVzdWx0LmxvYWRpbmcsIHBhcnRpYWwgPSBjdXJyZW50UmVzdWx0LnBhcnRpYWwsIG5ldHdvcmtTdGF0dXMgPSBjdXJyZW50UmVzdWx0Lm5ldHdvcmtTdGF0dXMsIGVycm9ycyA9IGN1cnJlbnRSZXN1bHQuZXJyb3JzO1xuICAgICAgICAgICAgdmFyIGVycm9yID0gY3VycmVudFJlc3VsdC5lcnJvciwgZGF0YSA9IGN1cnJlbnRSZXN1bHQuZGF0YTtcbiAgICAgICAgICAgIGlmIChlcnJvcnMgJiYgZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IG5ldyBBcG9sbG9FcnJvcih7IGdyYXBoUUxFcnJvcnM6IGVycm9ycyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCByZXN1bHQpLCB7IGxvYWRpbmc6IGxvYWRpbmcsXG4gICAgICAgICAgICAgICAgbmV0d29ya1N0YXR1czogbmV0d29ya1N0YXR1cyxcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IsIGNhbGxlZDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByZXZpb3VzRGF0YSA9IHRoaXMucHJldmlvdXNEYXRhLnJlc3VsdCAmJiB0aGlzLnByZXZpb3VzRGF0YS5yZXN1bHQuZGF0YTtcbiAgICAgICAgICAgICAgICByZXN1bHQuZGF0YSA9XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzRGF0YSAmJiBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9fYXNzaWduKF9fYXNzaWduKHt9LCBwcmV2aW91c0RhdGEpLCBkYXRhKSA6IHByZXZpb3VzRGF0YSB8fCBkYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHJlc3VsdCwge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiAodGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5xdWVyeS5nZXRMYXN0UmVzdWx0KCkgfHwge30pXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGF0YSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBmZXRjaFBvbGljeSA9IHRoaXMuY3VycmVudE9ic2VydmFibGUucXVlcnkub3B0aW9ucy5mZXRjaFBvbGljeTtcbiAgICAgICAgICAgICAgICB2YXIgcGFydGlhbFJlZmV0Y2ggPSBvcHRpb25zLnBhcnRpYWxSZWZldGNoO1xuICAgICAgICAgICAgICAgIGlmIChwYXJ0aWFsUmVmZXRjaCAmJlxuICAgICAgICAgICAgICAgICAgICAhZGF0YSAmJlxuICAgICAgICAgICAgICAgICAgICBwYXJ0aWFsICYmXG4gICAgICAgICAgICAgICAgICAgIGZldGNoUG9saWN5ICE9PSAnY2FjaGUtb25seScpIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihyZXN1bHQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXR3b3JrU3RhdHVzOiBOZXR3b3JrU3RhdHVzLmxvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucmVmZXRjaCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXN1bHQuZGF0YSA9IGRhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmNsaWVudCA9IHRoaXMuY2xpZW50O1xuICAgICAgICB0aGlzLnByZXZpb3VzRGF0YS5sb2FkaW5nID1cbiAgICAgICAgICAgICh0aGlzLnByZXZpb3VzRGF0YS5yZXN1bHQgJiYgdGhpcy5wcmV2aW91c0RhdGEucmVzdWx0LmxvYWRpbmcpIHx8IGZhbHNlO1xuICAgICAgICB0aGlzLnByZXZpb3VzRGF0YS5yZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgIHRoaXMuY3VycmVudE9ic2VydmFibGUucXVlcnkgJiZcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE9ic2VydmFibGUucXVlcnkucmVzZXRRdWVyeVN0b3JlRXJyb3JzKCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBRdWVyeURhdGEucHJvdG90eXBlLmhhbmRsZUVycm9yT3JDb21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvYnNRdWVyeSA9IHRoaXMuY3VycmVudE9ic2VydmFibGUucXVlcnk7XG4gICAgICAgIGlmICghb2JzUXVlcnkgfHwgIXRoaXMucHJldmlvdXNEYXRhLnJlc3VsdClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5wcmV2aW91c0RhdGEucmVzdWx0LCBkYXRhID0gX2EuZGF0YSwgbG9hZGluZyA9IF9hLmxvYWRpbmcsIGVycm9yID0gX2EuZXJyb3I7XG4gICAgICAgIGlmICghbG9hZGluZykge1xuICAgICAgICAgICAgdmFyIF9iID0gdGhpcy5nZXRPcHRpb25zKCksIHF1ZXJ5ID0gX2IucXVlcnksIHZhcmlhYmxlcyA9IF9iLnZhcmlhYmxlcywgb25Db21wbGV0ZWQgPSBfYi5vbkNvbXBsZXRlZCwgb25FcnJvciA9IF9iLm9uRXJyb3I7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2aW91c09wdGlvbnMgJiZcbiAgICAgICAgICAgICAgICAhdGhpcy5wcmV2aW91c0RhdGEubG9hZGluZyAmJlxuICAgICAgICAgICAgICAgIGVxdWFsKHRoaXMucHJldmlvdXNPcHRpb25zLnF1ZXJ5LCBxdWVyeSkgJiZcbiAgICAgICAgICAgICAgICBlcXVhbCh0aGlzLnByZXZpb3VzT3B0aW9ucy52YXJpYWJsZXMsIHZhcmlhYmxlcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob25Db21wbGV0ZWQgJiYgIWVycm9yKSB7XG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZWQoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChvbkVycm9yICYmIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgb25FcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFF1ZXJ5RGF0YS5wcm90b3R5cGUucmVtb3ZlUXVlcnlTdWJzY3JpcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnN1YnNjcmlwdGlvbjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUXVlcnlEYXRhLnByb3RvdHlwZS5vYnNlcnZhYmxlUXVlcnlGaWVsZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvYnNlcnZhYmxlID0gdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5xdWVyeTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhcmlhYmxlczogb2JzZXJ2YWJsZS52YXJpYWJsZXMsXG4gICAgICAgICAgICByZWZldGNoOiB0aGlzLm9ic1JlZmV0Y2gsXG4gICAgICAgICAgICBmZXRjaE1vcmU6IHRoaXMub2JzRmV0Y2hNb3JlLFxuICAgICAgICAgICAgdXBkYXRlUXVlcnk6IHRoaXMub2JzVXBkYXRlUXVlcnksXG4gICAgICAgICAgICBzdGFydFBvbGxpbmc6IHRoaXMub2JzU3RhcnRQb2xsaW5nLFxuICAgICAgICAgICAgc3RvcFBvbGxpbmc6IHRoaXMub2JzU3RvcFBvbGxpbmcsXG4gICAgICAgICAgICBzdWJzY3JpYmVUb01vcmU6IHRoaXMub2JzU3Vic2NyaWJlVG9Nb3JlLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgcmV0dXJuIFF1ZXJ5RGF0YTtcbn0oT3BlcmF0aW9uRGF0YSkpO1xuXG5mdW5jdGlvbiB1c2VEZWVwTWVtbyhtZW1vRm4sIGtleSkge1xuICAgIHZhciByZWYgPSB1c2VSZWYoKTtcbiAgICBpZiAoIXJlZi5jdXJyZW50IHx8ICFlcXVhbChrZXksIHJlZi5jdXJyZW50LmtleSkpIHtcbiAgICAgICAgcmVmLmN1cnJlbnQgPSB7IGtleToga2V5LCB2YWx1ZTogbWVtb0ZuKCkgfTtcbiAgICB9XG4gICAgcmV0dXJuIHJlZi5jdXJyZW50LnZhbHVlO1xufVxuXG5mdW5jdGlvbiB1c2VCYXNlUXVlcnkocXVlcnksIG9wdGlvbnMsIGxhenkpIHtcbiAgICBpZiAobGF6eSA9PT0gdm9pZCAwKSB7IGxhenkgPSBmYWxzZTsgfVxuICAgIHZhciBjb250ZXh0ID0gdXNlQ29udGV4dChnZXRBcG9sbG9Db250ZXh0KCkpO1xuICAgIHZhciBfYSA9IHVzZVJlZHVjZXIoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHggKyAxOyB9LCAwKSwgdGljayA9IF9hWzBdLCBmb3JjZVVwZGF0ZSA9IF9hWzFdO1xuICAgIHZhciB1cGRhdGVkT3B0aW9ucyA9IG9wdGlvbnMgPyBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgcXVlcnk6IHF1ZXJ5IH0pIDogeyBxdWVyeTogcXVlcnkgfTtcbiAgICB2YXIgcXVlcnlEYXRhUmVmID0gdXNlUmVmKCk7XG4gICAgdmFyIHF1ZXJ5RGF0YSA9IHF1ZXJ5RGF0YVJlZi5jdXJyZW50IHx8XG4gICAgICAgIG5ldyBRdWVyeURhdGEoe1xuICAgICAgICAgICAgb3B0aW9uczogdXBkYXRlZE9wdGlvbnMsXG4gICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgb25OZXdEYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFxdWVyeURhdGEuc3NySW5pdGlhdGVkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmb3JjZVVwZGF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIHF1ZXJ5RGF0YS5zZXRPcHRpb25zKHVwZGF0ZWRPcHRpb25zKTtcbiAgICBxdWVyeURhdGEuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgaWYgKHF1ZXJ5RGF0YS5zc3JJbml0aWF0ZWQoKSAmJiAhcXVlcnlEYXRhUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgcXVlcnlEYXRhUmVmLmN1cnJlbnQgPSBxdWVyeURhdGE7XG4gICAgfVxuICAgIHZhciBtZW1vID0ge1xuICAgICAgICBvcHRpb25zOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdXBkYXRlZE9wdGlvbnMpLCB7IG9uRXJyb3I6IHVuZGVmaW5lZCwgb25Db21wbGV0ZWQ6IHVuZGVmaW5lZCB9KSxcbiAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgdGljazogdGljayxcbiAgICB9O1xuICAgIHZhciByZXN1bHQgPSB1c2VEZWVwTWVtbyhmdW5jdGlvbiAoKSB7IHJldHVybiAobGF6eSA/IHF1ZXJ5RGF0YS5leGVjdXRlTGF6eSgpIDogcXVlcnlEYXRhLmV4ZWN1dGUoKSk7IH0sIG1lbW8pO1xuICAgIHZhciBxdWVyeVJlc3VsdCA9IGxhenlcbiAgICAgICAgPyByZXN1bHRbMV1cbiAgICAgICAgOiByZXN1bHQ7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFxdWVyeURhdGFSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgcXVlcnlEYXRhUmVmLmN1cnJlbnQgPSBxdWVyeURhdGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHF1ZXJ5RGF0YS5jbGVhbnVwKCk7IH07XG4gICAgfSwgW10pO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7IHJldHVybiBxdWVyeURhdGEuYWZ0ZXJFeGVjdXRlKHsgbGF6eTogbGF6eSB9KTsgfSwgW1xuICAgICAgICBxdWVyeVJlc3VsdC5sb2FkaW5nLFxuICAgICAgICBxdWVyeVJlc3VsdC5uZXR3b3JrU3RhdHVzLFxuICAgICAgICBxdWVyeVJlc3VsdC5lcnJvcixcbiAgICAgICAgcXVlcnlSZXN1bHQuZGF0YSxcbiAgICBdKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiB1c2VRdWVyeShxdWVyeSwgb3B0aW9ucykge1xuICAgIHJldHVybiB1c2VCYXNlUXVlcnkocXVlcnksIG9wdGlvbnMsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gdXNlTGF6eVF1ZXJ5KHF1ZXJ5LCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHVzZUJhc2VRdWVyeShxdWVyeSwgb3B0aW9ucywgdHJ1ZSk7XG59XG5cbnZhciBNdXRhdGlvbkRhdGEgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhNdXRhdGlvbkRhdGEsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTXV0YXRpb25EYXRhKF9hKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gX2Eub3B0aW9ucywgY29udGV4dCA9IF9hLmNvbnRleHQsIHJlc3VsdCA9IF9hLnJlc3VsdCwgc2V0UmVzdWx0ID0gX2Euc2V0UmVzdWx0O1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zLCBjb250ZXh0KSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5ydW5NdXRhdGlvbiA9IGZ1bmN0aW9uIChtdXRhdGlvbkZ1bmN0aW9uT3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKG11dGF0aW9uRnVuY3Rpb25PcHRpb25zID09PSB2b2lkIDApIHsgbXV0YXRpb25GdW5jdGlvbk9wdGlvbnMgPSB7fTsgfVxuICAgICAgICAgICAgX3RoaXMub25NdXRhdGlvblN0YXJ0KCk7XG4gICAgICAgICAgICB2YXIgbXV0YXRpb25JZCA9IF90aGlzLmdlbmVyYXRlTmV3TXV0YXRpb25JZCgpO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLm11dGF0ZShtdXRhdGlvbkZ1bmN0aW9uT3B0aW9ucylcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5vbk11dGF0aW9uQ29tcGxldGVkKHJlc3BvbnNlLCBtdXRhdGlvbklkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5vbk11dGF0aW9uRXJyb3IoZXJyb3IsIG11dGF0aW9uSWQpO1xuICAgICAgICAgICAgICAgIGlmICghX3RoaXMuZ2V0T3B0aW9ucygpLm9uRXJyb3IpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnZlcmlmeURvY3VtZW50VHlwZShvcHRpb25zLm11dGF0aW9uLCBEb2N1bWVudFR5cGUuTXV0YXRpb24pO1xuICAgICAgICBfdGhpcy5yZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgIF90aGlzLnNldFJlc3VsdCA9IHNldFJlc3VsdDtcbiAgICAgICAgX3RoaXMubW9zdFJlY2VudE11dGF0aW9uSWQgPSAwO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE11dGF0aW9uRGF0YS5wcm90b3R5cGUuZXhlY3V0ZSA9IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgdGhpcy5pc01vdW50ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnZlcmlmeURvY3VtZW50VHlwZSh0aGlzLmdldE9wdGlvbnMoKS5tdXRhdGlvbiwgRG9jdW1lbnRUeXBlLk11dGF0aW9uKTtcbiAgICAgICAgcmVzdWx0LmNsaWVudCA9IHRoaXMucmVmcmVzaENsaWVudCgpLmNsaWVudDtcbiAgICAgICAgcmV0dXJuIFt0aGlzLnJ1bk11dGF0aW9uLCByZXN1bHRdO1xuICAgIH07XG4gICAgTXV0YXRpb25EYXRhLnByb3RvdHlwZS5hZnRlckV4ZWN1dGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNNb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMudW5tb3VudC5iaW5kKHRoaXMpO1xuICAgIH07XG4gICAgTXV0YXRpb25EYXRhLnByb3RvdHlwZS5jbGVhbnVwID0gZnVuY3Rpb24gKCkge1xuICAgIH07XG4gICAgTXV0YXRpb25EYXRhLnByb3RvdHlwZS5tdXRhdGUgPSBmdW5jdGlvbiAobXV0YXRpb25GdW5jdGlvbk9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5nZXRPcHRpb25zKCksIG11dGF0aW9uID0gX2EubXV0YXRpb24sIHZhcmlhYmxlcyA9IF9hLnZhcmlhYmxlcywgb3B0aW1pc3RpY1Jlc3BvbnNlID0gX2Eub3B0aW1pc3RpY1Jlc3BvbnNlLCB1cGRhdGUgPSBfYS51cGRhdGUsIF9iID0gX2EuY29udGV4dCwgbXV0YXRpb25Db250ZXh0ID0gX2IgPT09IHZvaWQgMCA/IHt9IDogX2IsIF9jID0gX2EuYXdhaXRSZWZldGNoUXVlcmllcywgYXdhaXRSZWZldGNoUXVlcmllcyA9IF9jID09PSB2b2lkIDAgPyBmYWxzZSA6IF9jLCBmZXRjaFBvbGljeSA9IF9hLmZldGNoUG9saWN5O1xuICAgICAgICB2YXIgbXV0YXRlT3B0aW9ucyA9IF9fYXNzaWduKHt9LCBtdXRhdGlvbkZ1bmN0aW9uT3B0aW9ucyk7XG4gICAgICAgIHZhciBtdXRhdGVWYXJpYWJsZXMgPSBPYmplY3QuYXNzaWduKHt9LCB2YXJpYWJsZXMsIG11dGF0ZU9wdGlvbnMudmFyaWFibGVzKTtcbiAgICAgICAgZGVsZXRlIG11dGF0ZU9wdGlvbnMudmFyaWFibGVzO1xuICAgICAgICByZXR1cm4gdGhpcy5yZWZyZXNoQ2xpZW50KCkuY2xpZW50Lm11dGF0ZShfX2Fzc2lnbih7IG11dGF0aW9uOiBtdXRhdGlvbixcbiAgICAgICAgICAgIG9wdGltaXN0aWNSZXNwb25zZTogb3B0aW1pc3RpY1Jlc3BvbnNlLCByZWZldGNoUXVlcmllczogbXV0YXRlT3B0aW9ucy5yZWZldGNoUXVlcmllcyB8fCB0aGlzLmdldE9wdGlvbnMoKS5yZWZldGNoUXVlcmllcywgYXdhaXRSZWZldGNoUXVlcmllczogYXdhaXRSZWZldGNoUXVlcmllcyxcbiAgICAgICAgICAgIHVwZGF0ZTogdXBkYXRlLCBjb250ZXh0OiBtdXRhdGlvbkNvbnRleHQsIGZldGNoUG9saWN5OiBmZXRjaFBvbGljeSwgdmFyaWFibGVzOiBtdXRhdGVWYXJpYWJsZXMgfSwgbXV0YXRlT3B0aW9ucykpO1xuICAgIH07XG4gICAgTXV0YXRpb25EYXRhLnByb3RvdHlwZS5vbk11dGF0aW9uU3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5yZXN1bHQubG9hZGluZyAmJiAhdGhpcy5nZXRPcHRpb25zKCkuaWdub3JlUmVzdWx0cykge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVSZXN1bHQoe1xuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgZXJyb3I6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBkYXRhOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgY2FsbGVkOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTXV0YXRpb25EYXRhLnByb3RvdHlwZS5vbk11dGF0aW9uQ29tcGxldGVkID0gZnVuY3Rpb24gKHJlc3BvbnNlLCBtdXRhdGlvbklkKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMuZ2V0T3B0aW9ucygpLCBvbkNvbXBsZXRlZCA9IF9hLm9uQ29tcGxldGVkLCBpZ25vcmVSZXN1bHRzID0gX2EuaWdub3JlUmVzdWx0cztcbiAgICAgICAgdmFyIGRhdGEgPSByZXNwb25zZS5kYXRhLCBlcnJvcnMgPSByZXNwb25zZS5lcnJvcnM7XG4gICAgICAgIHZhciBlcnJvciA9IGVycm9ycyAmJiBlcnJvcnMubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBuZXcgQXBvbGxvRXJyb3IoeyBncmFwaFFMRXJyb3JzOiBlcnJvcnMgfSlcbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgICB2YXIgY2FsbE9uY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gb25Db21wbGV0ZWQgPyBvbkNvbXBsZXRlZChkYXRhKSA6IG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLmlzTW9zdFJlY2VudE11dGF0aW9uKG11dGF0aW9uSWQpICYmICFpZ25vcmVSZXN1bHRzKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVJlc3VsdCh7XG4gICAgICAgICAgICAgICAgY2FsbGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYWxsT25jb21wbGV0ZSgpO1xuICAgIH07XG4gICAgTXV0YXRpb25EYXRhLnByb3RvdHlwZS5vbk11dGF0aW9uRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IsIG11dGF0aW9uSWQpIHtcbiAgICAgICAgdmFyIG9uRXJyb3IgPSB0aGlzLmdldE9wdGlvbnMoKS5vbkVycm9yO1xuICAgICAgICBpZiAodGhpcy5pc01vc3RSZWNlbnRNdXRhdGlvbihtdXRhdGlvbklkKSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVSZXN1bHQoe1xuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICAgICAgICBkYXRhOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgY2FsbGVkOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob25FcnJvcikge1xuICAgICAgICAgICAgb25FcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE11dGF0aW9uRGF0YS5wcm90b3R5cGUuZ2VuZXJhdGVOZXdNdXRhdGlvbklkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKyt0aGlzLm1vc3RSZWNlbnRNdXRhdGlvbklkO1xuICAgIH07XG4gICAgTXV0YXRpb25EYXRhLnByb3RvdHlwZS5pc01vc3RSZWNlbnRNdXRhdGlvbiA9IGZ1bmN0aW9uIChtdXRhdGlvbklkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vc3RSZWNlbnRNdXRhdGlvbklkID09PSBtdXRhdGlvbklkO1xuICAgIH07XG4gICAgTXV0YXRpb25EYXRhLnByb3RvdHlwZS51cGRhdGVSZXN1bHQgPSBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIGlmICh0aGlzLmlzTW91bnRlZCAmJlxuICAgICAgICAgICAgKCF0aGlzLnByZXZpb3VzUmVzdWx0IHx8ICFlcXVhbCh0aGlzLnByZXZpb3VzUmVzdWx0LCByZXN1bHQpKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRSZXN1bHQocmVzdWx0KTtcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNSZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBNdXRhdGlvbkRhdGE7XG59KE9wZXJhdGlvbkRhdGEpKTtcblxuZnVuY3Rpb24gdXNlTXV0YXRpb24obXV0YXRpb24sIG9wdGlvbnMpIHtcbiAgICB2YXIgY29udGV4dCA9IHVzZUNvbnRleHQoZ2V0QXBvbGxvQ29udGV4dCgpKTtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZSh7IGNhbGxlZDogZmFsc2UsIGxvYWRpbmc6IGZhbHNlIH0pLCByZXN1bHQgPSBfYVswXSwgc2V0UmVzdWx0ID0gX2FbMV07XG4gICAgdmFyIHVwZGF0ZWRPcHRpb25zID0gb3B0aW9ucyA/IF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb25zKSwgeyBtdXRhdGlvbjogbXV0YXRpb24gfSkgOiB7IG11dGF0aW9uOiBtdXRhdGlvbiB9O1xuICAgIHZhciBtdXRhdGlvbkRhdGFSZWYgPSB1c2VSZWYoKTtcbiAgICBmdW5jdGlvbiBnZXRNdXRhdGlvbkRhdGFSZWYoKSB7XG4gICAgICAgIGlmICghbXV0YXRpb25EYXRhUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIG11dGF0aW9uRGF0YVJlZi5jdXJyZW50ID0gbmV3IE11dGF0aW9uRGF0YSh7XG4gICAgICAgICAgICAgICAgb3B0aW9uczogdXBkYXRlZE9wdGlvbnMsXG4gICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICBzZXRSZXN1bHQ6IHNldFJlc3VsdFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG11dGF0aW9uRGF0YVJlZi5jdXJyZW50O1xuICAgIH1cbiAgICB2YXIgbXV0YXRpb25EYXRhID0gZ2V0TXV0YXRpb25EYXRhUmVmKCk7XG4gICAgbXV0YXRpb25EYXRhLnNldE9wdGlvbnModXBkYXRlZE9wdGlvbnMpO1xuICAgIG11dGF0aW9uRGF0YS5jb250ZXh0ID0gY29udGV4dDtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkgeyByZXR1cm4gbXV0YXRpb25EYXRhLmFmdGVyRXhlY3V0ZSgpOyB9KTtcbiAgICByZXR1cm4gbXV0YXRpb25EYXRhLmV4ZWN1dGUocmVzdWx0KTtcbn1cblxudmFyIFN1YnNjcmlwdGlvbkRhdGEgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTdWJzY3JpcHRpb25EYXRhLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFN1YnNjcmlwdGlvbkRhdGEoX2EpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBfYS5vcHRpb25zLCBjb250ZXh0ID0gX2EuY29udGV4dCwgc2V0UmVzdWx0ID0gX2Euc2V0UmVzdWx0O1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zLCBjb250ZXh0KSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5jdXJyZW50T2JzZXJ2YWJsZSA9IHt9O1xuICAgICAgICBfdGhpcy5zZXRSZXN1bHQgPSBzZXRSZXN1bHQ7XG4gICAgICAgIF90aGlzLmluaXRpYWxpemUob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgU3Vic2NyaXB0aW9uRGF0YS5wcm90b3R5cGUuZXhlY3V0ZSA9IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0T3B0aW9ucygpLnNraXAgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYW51cCgpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlcnJvcjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGRhdGE6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHRoaXMuZ2V0T3B0aW9ucygpLnZhcmlhYmxlc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY3VycmVudFJlc3VsdCA9IHJlc3VsdDtcbiAgICAgICAgaWYgKHRoaXMucmVmcmVzaENsaWVudCgpLmlzTmV3KSB7XG4gICAgICAgICAgICBjdXJyZW50UmVzdWx0ID0gdGhpcy5nZXRMb2FkaW5nUmVzdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNob3VsZFJlc3Vic2NyaWJlID0gdGhpcy5nZXRPcHRpb25zKCkuc2hvdWxkUmVzdWJzY3JpYmU7XG4gICAgICAgIGlmICh0eXBlb2Ygc2hvdWxkUmVzdWJzY3JpYmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHNob3VsZFJlc3Vic2NyaWJlID0gISFzaG91bGRSZXN1YnNjcmliZSh0aGlzLmdldE9wdGlvbnMoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3VsZFJlc3Vic2NyaWJlICE9PSBmYWxzZSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2aW91c09wdGlvbnMgJiZcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMucHJldmlvdXNPcHRpb25zKS5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAodGhpcy5wcmV2aW91c09wdGlvbnMuc3Vic2NyaXB0aW9uICE9PSB0aGlzLmdldE9wdGlvbnMoKS5zdWJzY3JpcHRpb24gfHxcbiAgICAgICAgICAgICAgICAhZXF1YWwodGhpcy5wcmV2aW91c09wdGlvbnMudmFyaWFibGVzLCB0aGlzLmdldE9wdGlvbnMoKS52YXJpYWJsZXMpIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c09wdGlvbnMuc2tpcCAhPT0gdGhpcy5nZXRPcHRpb25zKCkuc2tpcCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYW51cCgpO1xuICAgICAgICAgICAgY3VycmVudFJlc3VsdCA9IHRoaXMuZ2V0TG9hZGluZ1Jlc3VsdCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSh0aGlzLmdldE9wdGlvbnMoKSk7XG4gICAgICAgIHRoaXMuc3RhcnRTdWJzY3JpcHRpb24oKTtcbiAgICAgICAgdGhpcy5wcmV2aW91c09wdGlvbnMgPSB0aGlzLmdldE9wdGlvbnMoKTtcbiAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBjdXJyZW50UmVzdWx0KSwgeyB2YXJpYWJsZXM6IHRoaXMuZ2V0T3B0aW9ucygpLnZhcmlhYmxlcyB9KTtcbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbkRhdGEucHJvdG90eXBlLmFmdGVyRXhlY3V0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc01vdW50ZWQgPSB0cnVlO1xuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uRGF0YS5wcm90b3R5cGUuY2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbmRTdWJzY3JpcHRpb24oKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuY3VycmVudE9ic2VydmFibGUucXVlcnk7XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb25EYXRhLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudE9ic2VydmFibGUucXVlcnkgfHwgdGhpcy5nZXRPcHRpb25zKCkuc2tpcCA9PT0gdHJ1ZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5xdWVyeSA9IHRoaXMucmVmcmVzaENsaWVudCgpLmNsaWVudC5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgcXVlcnk6IG9wdGlvbnMuc3Vic2NyaXB0aW9uLFxuICAgICAgICAgICAgdmFyaWFibGVzOiBvcHRpb25zLnZhcmlhYmxlcyxcbiAgICAgICAgICAgIGZldGNoUG9saWN5OiBvcHRpb25zLmZldGNoUG9saWN5XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uRGF0YS5wcm90b3R5cGUuc3RhcnRTdWJzY3JpcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnN1YnNjcmlwdGlvbilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5zdWJzY3JpcHRpb24gPSB0aGlzLmN1cnJlbnRPYnNlcnZhYmxlLnF1ZXJ5LnN1YnNjcmliZSh7XG4gICAgICAgICAgICBuZXh0OiB0aGlzLnVwZGF0ZUN1cnJlbnREYXRhLmJpbmQodGhpcyksXG4gICAgICAgICAgICBlcnJvcjogdGhpcy51cGRhdGVFcnJvci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgY29tcGxldGU6IHRoaXMuY29tcGxldGVTdWJzY3JpcHRpb24uYmluZCh0aGlzKVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbkRhdGEucHJvdG90eXBlLmdldExvYWRpbmdSZXN1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgZXJyb3I6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGRhdGE6IHVuZGVmaW5lZFxuICAgICAgICB9O1xuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uRGF0YS5wcm90b3R5cGUudXBkYXRlUmVzdWx0ID0gZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICBpZiAodGhpcy5pc01vdW50ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0UmVzdWx0KHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbkRhdGEucHJvdG90eXBlLnVwZGF0ZUN1cnJlbnREYXRhID0gZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICB2YXIgb25TdWJzY3JpcHRpb25EYXRhID0gdGhpcy5nZXRPcHRpb25zKCkub25TdWJzY3JpcHRpb25EYXRhO1xuICAgICAgICB0aGlzLnVwZGF0ZVJlc3VsdCh7XG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgZXJyb3I6IHVuZGVmaW5lZFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG9uU3Vic2NyaXB0aW9uRGF0YSkge1xuICAgICAgICAgICAgb25TdWJzY3JpcHRpb25EYXRhKHtcbiAgICAgICAgICAgICAgICBjbGllbnQ6IHRoaXMucmVmcmVzaENsaWVudCgpLmNsaWVudCxcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25EYXRhOiByZXN1bHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb25EYXRhLnByb3RvdHlwZS51cGRhdGVFcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICB0aGlzLnVwZGF0ZVJlc3VsdCh7XG4gICAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbkRhdGEucHJvdG90eXBlLmNvbXBsZXRlU3Vic2NyaXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb25TdWJzY3JpcHRpb25Db21wbGV0ZSA9IHRoaXMuZ2V0T3B0aW9ucygpLm9uU3Vic2NyaXB0aW9uQ29tcGxldGU7XG4gICAgICAgIGlmIChvblN1YnNjcmlwdGlvbkNvbXBsZXRlKVxuICAgICAgICAgICAgb25TdWJzY3JpcHRpb25Db21wbGV0ZSgpO1xuICAgICAgICB0aGlzLmVuZFN1YnNjcmlwdGlvbigpO1xuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uRGF0YS5wcm90b3R5cGUuZW5kU3Vic2NyaXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5zdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE9ic2VydmFibGUuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5jdXJyZW50T2JzZXJ2YWJsZS5zdWJzY3JpcHRpb247XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBTdWJzY3JpcHRpb25EYXRhO1xufShPcGVyYXRpb25EYXRhKSk7XG5cbmZ1bmN0aW9uIHVzZVN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24sIG9wdGlvbnMpIHtcbiAgICB2YXIgY29udGV4dCA9IHVzZUNvbnRleHQoZ2V0QXBvbGxvQ29udGV4dCgpKTtcbiAgICB2YXIgdXBkYXRlZE9wdGlvbnMgPSBvcHRpb25zXG4gICAgICAgID8gX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IHN1YnNjcmlwdGlvbjogc3Vic2NyaXB0aW9uIH0pIDogeyBzdWJzY3JpcHRpb246IHN1YnNjcmlwdGlvbiB9O1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKHtcbiAgICAgICAgbG9hZGluZzogIXVwZGF0ZWRPcHRpb25zLnNraXAsXG4gICAgICAgIGVycm9yOiB1bmRlZmluZWQsXG4gICAgICAgIGRhdGE6IHVuZGVmaW5lZFxuICAgIH0pLCByZXN1bHQgPSBfYVswXSwgc2V0UmVzdWx0ID0gX2FbMV07XG4gICAgdmFyIHN1YnNjcmlwdGlvbkRhdGFSZWYgPSB1c2VSZWYoKTtcbiAgICBmdW5jdGlvbiBnZXRTdWJzY3JpcHRpb25EYXRhUmVmKCkge1xuICAgICAgICBpZiAoIXN1YnNjcmlwdGlvbkRhdGFSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uRGF0YVJlZi5jdXJyZW50ID0gbmV3IFN1YnNjcmlwdGlvbkRhdGEoe1xuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHVwZGF0ZWRPcHRpb25zLFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0OiBzZXRSZXN1bHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdWJzY3JpcHRpb25EYXRhUmVmLmN1cnJlbnQ7XG4gICAgfVxuICAgIHZhciBzdWJzY3JpcHRpb25EYXRhID0gZ2V0U3Vic2NyaXB0aW9uRGF0YVJlZigpO1xuICAgIHN1YnNjcmlwdGlvbkRhdGEuc2V0T3B0aW9ucyh1cGRhdGVkT3B0aW9ucywgdHJ1ZSk7XG4gICAgc3Vic2NyaXB0aW9uRGF0YS5jb250ZXh0ID0gY29udGV4dDtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkgeyByZXR1cm4gc3Vic2NyaXB0aW9uRGF0YS5hZnRlckV4ZWN1dGUoKTsgfSk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN1YnNjcmlwdGlvbkRhdGEuY2xlYW51cC5iaW5kKHN1YnNjcmlwdGlvbkRhdGEpOyB9LCBbXSk7XG4gICAgcmV0dXJuIHN1YnNjcmlwdGlvbkRhdGEuZXhlY3V0ZShyZXN1bHQpO1xufVxuXG5mdW5jdGlvbiB1c2VBcG9sbG9DbGllbnQoKSB7XG4gICAgdmFyIGNsaWVudCA9IFJlYWN0LnVzZUNvbnRleHQoZ2V0QXBvbGxvQ29udGV4dCgpKS5jbGllbnQ7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGNsaWVudCwgMSkgOiBpbnZhcmlhbnQoY2xpZW50LCAnTm8gQXBvbGxvIENsaWVudCBpbnN0YW5jZSBjYW4gYmUgZm91bmQuIFBsZWFzZSBlbnN1cmUgdGhhdCB5b3UgJyArXG4gICAgICAgICdoYXZlIGNhbGxlZCBgQXBvbGxvUHJvdmlkZXJgIGhpZ2hlciB1cCBpbiB5b3VyIHRyZWUuJyk7XG4gICAgcmV0dXJuIGNsaWVudDtcbn1cblxuZnVuY3Rpb24gbWFrZURlZmF1bHRRdWVyeUluZm8oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VlbjogZmFsc2UsXG4gICAgICAgIG9ic2VydmFibGU6IG51bGxcbiAgICB9O1xufVxudmFyIFJlbmRlclByb21pc2VzID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZW5kZXJQcm9taXNlcygpIHtcbiAgICAgICAgdGhpcy5xdWVyeVByb21pc2VzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnF1ZXJ5SW5mb1RyaWUgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIFJlbmRlclByb21pc2VzLnByb3RvdHlwZS5yZWdpc3RlclNTUk9ic2VydmFibGUgPSBmdW5jdGlvbiAob2JzZXJ2YWJsZSwgcHJvcHMpIHtcbiAgICAgICAgdGhpcy5sb29rdXBRdWVyeUluZm8ocHJvcHMpLm9ic2VydmFibGUgPSBvYnNlcnZhYmxlO1xuICAgIH07XG4gICAgUmVuZGVyUHJvbWlzZXMucHJvdG90eXBlLmdldFNTUk9ic2VydmFibGUgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9va3VwUXVlcnlJbmZvKHByb3BzKS5vYnNlcnZhYmxlO1xuICAgIH07XG4gICAgUmVuZGVyUHJvbWlzZXMucHJvdG90eXBlLmFkZFF1ZXJ5UHJvbWlzZSA9IGZ1bmN0aW9uIChxdWVyeUluc3RhbmNlLCBmaW5pc2gpIHtcbiAgICAgICAgdmFyIGluZm8gPSB0aGlzLmxvb2t1cFF1ZXJ5SW5mbyhxdWVyeUluc3RhbmNlLmdldE9wdGlvbnMoKSk7XG4gICAgICAgIGlmICghaW5mby5zZWVuKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXJ5UHJvbWlzZXMuc2V0KHF1ZXJ5SW5zdGFuY2UuZ2V0T3B0aW9ucygpLCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocXVlcnlJbnN0YW5jZS5mZXRjaERhdGEoKSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmluaXNoKCk7XG4gICAgfTtcbiAgICBSZW5kZXJQcm9taXNlcy5wcm90b3R5cGUuaGFzUHJvbWlzZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5UHJvbWlzZXMuc2l6ZSA+IDA7XG4gICAgfTtcbiAgICBSZW5kZXJQcm9taXNlcy5wcm90b3R5cGUuY29uc3VtZUFuZEF3YWl0UHJvbWlzZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgICAgICB0aGlzLnF1ZXJ5UHJvbWlzZXMuZm9yRWFjaChmdW5jdGlvbiAocHJvbWlzZSwgcXVlcnlJbnN0YW5jZSkge1xuICAgICAgICAgICAgX3RoaXMubG9va3VwUXVlcnlJbmZvKHF1ZXJ5SW5zdGFuY2UpLnNlZW4gPSB0cnVlO1xuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChwcm9taXNlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucXVlcnlQcm9taXNlcy5jbGVhcigpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgIH07XG4gICAgUmVuZGVyUHJvbWlzZXMucHJvdG90eXBlLmxvb2t1cFF1ZXJ5SW5mbyA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICB2YXIgcXVlcnlJbmZvVHJpZSA9IHRoaXMucXVlcnlJbmZvVHJpZTtcbiAgICAgICAgdmFyIHF1ZXJ5ID0gcHJvcHMucXVlcnksIHZhcmlhYmxlcyA9IHByb3BzLnZhcmlhYmxlcztcbiAgICAgICAgdmFyIHZhck1hcCA9IHF1ZXJ5SW5mb1RyaWUuZ2V0KHF1ZXJ5KSB8fCBuZXcgTWFwKCk7XG4gICAgICAgIGlmICghcXVlcnlJbmZvVHJpZS5oYXMocXVlcnkpKVxuICAgICAgICAgICAgcXVlcnlJbmZvVHJpZS5zZXQocXVlcnksIHZhck1hcCk7XG4gICAgICAgIHZhciB2YXJpYWJsZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeSh2YXJpYWJsZXMpO1xuICAgICAgICB2YXIgaW5mbyA9IHZhck1hcC5nZXQodmFyaWFibGVzU3RyaW5nKSB8fCBtYWtlRGVmYXVsdFF1ZXJ5SW5mbygpO1xuICAgICAgICBpZiAoIXZhck1hcC5oYXModmFyaWFibGVzU3RyaW5nKSlcbiAgICAgICAgICAgIHZhck1hcC5zZXQodmFyaWFibGVzU3RyaW5nLCBpbmZvKTtcbiAgICAgICAgcmV0dXJuIGluZm87XG4gICAgfTtcbiAgICByZXR1cm4gUmVuZGVyUHJvbWlzZXM7XG59KCkpO1xuXG5leHBvcnQgeyBSZW5kZXJQcm9taXNlcywgdXNlQXBvbGxvQ2xpZW50LCB1c2VMYXp5UXVlcnksIHVzZU11dGF0aW9uLCB1c2VRdWVyeSwgdXNlU3Vic2NyaXB0aW9uIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWFjdC1ob29rcy5lc20uanMubWFwXG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LWRvbS1zZXJ2ZXIuYnJvd3Nlci5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzJyk7XG5cbi8vIERvIG5vdCByZXF1aXJlIHRoaXMgbW9kdWxlIGRpcmVjdGx5ISBVc2Ugbm9ybWFsIGBpbnZhcmlhbnRgIGNhbGxzIHdpdGhcbi8vIHRlbXBsYXRlIGxpdGVyYWwgc3RyaW5ncy4gVGhlIG1lc3NhZ2VzIHdpbGwgYmUgcmVwbGFjZWQgd2l0aCBlcnJvciBjb2Rlc1xuLy8gZHVyaW5nIGJ1aWxkLlxuZnVuY3Rpb24gZm9ybWF0UHJvZEVycm9yTWVzc2FnZShjb2RlKSB7XG4gIHZhciB1cmwgPSAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2Vycm9yLWRlY29kZXIuaHRtbD9pbnZhcmlhbnQ9JyArIGNvZGU7XG5cbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB1cmwgKz0gJyZhcmdzW109JyArIGVuY29kZVVSSUNvbXBvbmVudChhcmd1bWVudHNbaV0pO1xuICB9XG5cbiAgcmV0dXJuIFwiTWluaWZpZWQgUmVhY3QgZXJyb3IgI1wiICsgY29kZSArIFwiOyB2aXNpdCBcIiArIHVybCArIFwiIGZvciB0aGUgZnVsbCBtZXNzYWdlIG9yIFwiICsgJ3VzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCBmb3IgZnVsbCBlcnJvcnMgYW5kIGFkZGl0aW9uYWwgJyArICdoZWxwZnVsIHdhcm5pbmdzLic7XG59XG5cbnZhciBSZWFjdFZlcnNpb24gPSAnMTYuMTMuMSc7XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IFJlYWN0Ll9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEOyAvLyBQcmV2ZW50IG5ld2VyIHJlbmRlcmVycyBmcm9tIFJURSB3aGVuIHVzZWQgd2l0aCBvbGRlciByZWFjdCBwYWNrYWdlIHZlcnNpb25zLlxuLy8gQ3VycmVudCBvd25lciBhbmQgZGlzcGF0Y2hlciB1c2VkIHRvIHNoYXJlIHRoZSBzYW1lIHJlZixcbi8vIGJ1dCBQUiAjMTQ1NDggc3BsaXQgdGhlbSBvdXQgdG8gYmV0dGVyIHN1cHBvcnQgdGhlIHJlYWN0LWRlYnVnLXRvb2xzIHBhY2thZ2UuXG5cbmlmICghUmVhY3RTaGFyZWRJbnRlcm5hbHMuaGFzT3duUHJvcGVydHkoJ1JlYWN0Q3VycmVudERpc3BhdGNoZXInKSkge1xuICBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyID0ge1xuICAgIGN1cnJlbnQ6IG51bGxcbiAgfTtcbn1cblxuaWYgKCFSZWFjdFNoYXJlZEludGVybmFscy5oYXNPd25Qcm9wZXJ0eSgnUmVhY3RDdXJyZW50QmF0Y2hDb25maWcnKSkge1xuICBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRCYXRjaENvbmZpZyA9IHtcbiAgICBzdXNwZW5zZTogbnVsbFxuICB9O1xufVxuXG4vLyBieSBjYWxscyB0byB0aGVzZSBtZXRob2RzIGJ5IGEgQmFiZWwgcGx1Z2luLlxuLy9cbi8vIEluIFBST0QgKG9yIGluIHBhY2thZ2VzIHdpdGhvdXQgYWNjZXNzIHRvIFJlYWN0IGludGVybmFscyksXG4vLyB0aGV5IGFyZSBsZWZ0IGFzIHRoZXkgYXJlIGluc3RlYWQuXG5cbmZ1bmN0aW9uIHdhcm4oZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ3dhcm4nLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBoYXNFeGlzdGluZ1N0YWNrID0gYXJncy5sZW5ndGggPiAwICYmIHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09ICdzdHJpbmcnICYmIGFyZ3NbYXJncy5sZW5ndGggLSAxXS5pbmRleE9mKCdcXG4gICAgaW4nKSA9PT0gMDtcblxuICAgIGlmICghaGFzRXhpc3RpbmdTdGFjaykge1xuICAgICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfVxufVxuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTsgLy8gVE9ETzogV2UgZG9uJ3QgdXNlIEFzeW5jTW9kZSBvciBDb25jdXJyZW50TW9kZSBhbnltb3JlLiBUaGV5IHdlcmUgdGVtcG9yYXJ5XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYmxvY2snKSA6IDB4ZWFkOTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxudmFyIFVuaW5pdGlhbGl6ZWQgPSAtMTtcbnZhciBQZW5kaW5nID0gMDtcbnZhciBSZXNvbHZlZCA9IDE7XG52YXIgUmVqZWN0ZWQgPSAyO1xuZnVuY3Rpb24gcmVmaW5lUmVzb2x2ZWRMYXp5Q29tcG9uZW50KGxhenlDb21wb25lbnQpIHtcbiAgcmV0dXJuIGxhenlDb21wb25lbnQuX3N0YXR1cyA9PT0gUmVzb2x2ZWQgPyBsYXp5Q29tcG9uZW50Ll9yZXN1bHQgOiBudWxsO1xufVxuZnVuY3Rpb24gaW5pdGlhbGl6ZUxhenlDb21wb25lbnRUeXBlKGxhenlDb21wb25lbnQpIHtcbiAgaWYgKGxhenlDb21wb25lbnQuX3N0YXR1cyA9PT0gVW5pbml0aWFsaXplZCkge1xuICAgIGxhenlDb21wb25lbnQuX3N0YXR1cyA9IFBlbmRpbmc7XG4gICAgdmFyIGN0b3IgPSBsYXp5Q29tcG9uZW50Ll9jdG9yO1xuICAgIHZhciB0aGVuYWJsZSA9IGN0b3IoKTtcbiAgICBsYXp5Q29tcG9uZW50Ll9yZXN1bHQgPSB0aGVuYWJsZTtcbiAgICB0aGVuYWJsZS50aGVuKGZ1bmN0aW9uIChtb2R1bGVPYmplY3QpIHtcbiAgICAgIGlmIChsYXp5Q29tcG9uZW50Ll9zdGF0dXMgPT09IFBlbmRpbmcpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRFeHBvcnQgPSBtb2R1bGVPYmplY3QuZGVmYXVsdDtcblxuICAgICAgICB7XG4gICAgICAgICAgaWYgKGRlZmF1bHRFeHBvcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZXJyb3IoJ2xhenk6IEV4cGVjdGVkIHRoZSByZXN1bHQgb2YgYSBkeW5hbWljIGltcG9ydCgpIGNhbGwuICcgKyAnSW5zdGVhZCByZWNlaXZlZDogJXNcXG5cXG5Zb3VyIGNvZGUgc2hvdWxkIGxvb2sgbGlrZTogXFxuICAnICsgXCJjb25zdCBNeUNvbXBvbmVudCA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL015Q29tcG9uZW50JykpXCIsIG1vZHVsZU9iamVjdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGF6eUNvbXBvbmVudC5fc3RhdHVzID0gUmVzb2x2ZWQ7XG4gICAgICAgIGxhenlDb21wb25lbnQuX3Jlc3VsdCA9IGRlZmF1bHRFeHBvcnQ7XG4gICAgICB9XG4gICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBpZiAobGF6eUNvbXBvbmVudC5fc3RhdHVzID09PSBQZW5kaW5nKSB7XG4gICAgICAgIGxhenlDb21wb25lbnQuX3N0YXR1cyA9IFJlamVjdGVkO1xuICAgICAgICBsYXp5Q29tcG9uZW50Ll9yZXN1bHQgPSBlcnJvcjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gXCJQcm9maWxlclwiO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgcmV0dXJuICdDb250ZXh0LkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICByZXR1cm4gJ0NvbnRleHQuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciB0aGVuYWJsZSA9IHR5cGU7XG4gICAgICAgICAgdmFyIHJlc29sdmVkVGhlbmFibGUgPSByZWZpbmVSZXNvbHZlZExhenlDb21wb25lbnQodGhlbmFibGUpO1xuXG4gICAgICAgICAgaWYgKHJlc29sdmVkVGhlbmFibGUpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHJlc29sdmVkVGhlbmFibGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBCRUZPUkVfU0xBU0hfUkUgPSAvXiguKilbXFxcXFxcL10vO1xuZnVuY3Rpb24gZGVzY3JpYmVDb21wb25lbnRGcmFtZSAobmFtZSwgc291cmNlLCBvd25lck5hbWUpIHtcbiAgdmFyIHNvdXJjZUluZm8gPSAnJztcblxuICBpZiAoc291cmNlKSB7XG4gICAgdmFyIHBhdGggPSBzb3VyY2UuZmlsZU5hbWU7XG4gICAgdmFyIGZpbGVOYW1lID0gcGF0aC5yZXBsYWNlKEJFRk9SRV9TTEFTSF9SRSwgJycpO1xuXG4gICAge1xuICAgICAgLy8gSW4gREVWLCBpbmNsdWRlIGNvZGUgZm9yIGEgY29tbW9uIHNwZWNpYWwgY2FzZTpcbiAgICAgIC8vIHByZWZlciBcImZvbGRlci9pbmRleC5qc1wiIGluc3RlYWQgb2YganVzdCBcImluZGV4LmpzXCIuXG4gICAgICBpZiAoL15pbmRleFxcLi8udGVzdChmaWxlTmFtZSkpIHtcbiAgICAgICAgdmFyIG1hdGNoID0gcGF0aC5tYXRjaChCRUZPUkVfU0xBU0hfUkUpO1xuXG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgIHZhciBwYXRoQmVmb3JlU2xhc2ggPSBtYXRjaFsxXTtcblxuICAgICAgICAgIGlmIChwYXRoQmVmb3JlU2xhc2gpIHtcbiAgICAgICAgICAgIHZhciBmb2xkZXJOYW1lID0gcGF0aEJlZm9yZVNsYXNoLnJlcGxhY2UoQkVGT1JFX1NMQVNIX1JFLCAnJyk7XG4gICAgICAgICAgICBmaWxlTmFtZSA9IGZvbGRlck5hbWUgKyAnLycgKyBmaWxlTmFtZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzb3VyY2VJbmZvID0gJyAoYXQgJyArIGZpbGVOYW1lICsgJzonICsgc291cmNlLmxpbmVOdW1iZXIgKyAnKSc7XG4gIH0gZWxzZSBpZiAob3duZXJOYW1lKSB7XG4gICAgc291cmNlSW5mbyA9ICcgKGNyZWF0ZWQgYnkgJyArIG93bmVyTmFtZSArICcpJztcbiAgfVxuXG4gIHJldHVybiAnXFxuICAgIGluICcgKyAobmFtZSB8fCAnVW5rbm93bicpICsgc291cmNlSW5mbztcbn1cblxudmFyIGVuYWJsZVN1c3BlbnNlU2VydmVyUmVuZGVyZXIgPSBmYWxzZTtcblxudmFyIGVuYWJsZURlcHJlY2F0ZWRGbGFyZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgSG9zdCBDb21wb25lbnQgc3VwcG9ydC5cblxudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG52YXIgZGlkV2FybkFib3V0SW52YWxpZGF0ZUNvbnRleHRUeXBlO1xuXG57XG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICBkaWRXYXJuQWJvdXRJbnZhbGlkYXRlQ29udGV4dFR5cGUgPSBuZXcgU2V0KCk7XG59XG5cbnZhciBlbXB0eU9iamVjdCA9IHt9O1xuXG57XG4gIE9iamVjdC5mcmVlemUoZW1wdHlPYmplY3QpO1xufVxuXG5mdW5jdGlvbiBtYXNrQ29udGV4dCh0eXBlLCBjb250ZXh0KSB7XG4gIHZhciBjb250ZXh0VHlwZXMgPSB0eXBlLmNvbnRleHRUeXBlcztcblxuICBpZiAoIWNvbnRleHRUeXBlcykge1xuICAgIHJldHVybiBlbXB0eU9iamVjdDtcbiAgfVxuXG4gIHZhciBtYXNrZWRDb250ZXh0ID0ge307XG5cbiAgZm9yICh2YXIgY29udGV4dE5hbWUgaW4gY29udGV4dFR5cGVzKSB7XG4gICAgbWFza2VkQ29udGV4dFtjb250ZXh0TmFtZV0gPSBjb250ZXh0W2NvbnRleHROYW1lXTtcbiAgfVxuXG4gIHJldHVybiBtYXNrZWRDb250ZXh0O1xufVxuXG5mdW5jdGlvbiBjaGVja0NvbnRleHRUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24pIHtcbiAge1xuICAgIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgJ0NvbXBvbmVudCcsIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNvbnRleHRCb3VuZHMoY29udGV4dCwgdGhyZWFkSUQpIHtcbiAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBlbm91Z2ggc2xvdHMgaW4gdGhpcyBjb250ZXh0IHRvIHN0b3JlIHRoaXMgdGhyZWFkSUQsXG4gIC8vIGZpbGwgaXQgaW4gd2l0aG91dCBsZWF2aW5nIGFueSBob2xlcyB0byBlbnN1cmUgdGhhdCB0aGUgVk0gb3B0aW1pemVzXG4gIC8vIHRoaXMgYXMgbm9uLWhvbGV5IGluZGV4IHByb3BlcnRpZXMuXG4gIC8vIChOb3RlOiBJZiBgcmVhY3RgIHBhY2thZ2UgaXMgPCAxNi42LCBfdGhyZWFkQ291bnQgaXMgdW5kZWZpbmVkLilcbiAgZm9yICh2YXIgaSA9IGNvbnRleHQuX3RocmVhZENvdW50IHwgMDsgaSA8PSB0aHJlYWRJRDsgaSsrKSB7XG4gICAgLy8gV2UgYXNzdW1lIHRoYXQgdGhpcyBpcyB0aGUgc2FtZSBhcyB0aGUgZGVmYXVsdFZhbHVlIHdoaWNoIG1pZ2h0IG5vdCBiZVxuICAgIC8vIHRydWUgaWYgd2UncmUgcmVuZGVyaW5nIGluc2lkZSBhIHNlY29uZGFyeSByZW5kZXJlciBidXQgdGhleSBhcmVcbiAgICAvLyBzZWNvbmRhcnkgYmVjYXVzZSB0aGVzZSB1c2UgY2FzZXMgYXJlIHZlcnkgcmFyZS5cbiAgICBjb250ZXh0W2ldID0gY29udGV4dC5fY3VycmVudFZhbHVlMjtcbiAgICBjb250ZXh0Ll90aHJlYWRDb3VudCA9IGkgKyAxO1xuICB9XG59XG5mdW5jdGlvbiBwcm9jZXNzQ29udGV4dCh0eXBlLCBjb250ZXh0LCB0aHJlYWRJRCwgaXNDbGFzcykge1xuICBpZiAoaXNDbGFzcykge1xuICAgIHZhciBjb250ZXh0VHlwZSA9IHR5cGUuY29udGV4dFR5cGU7XG5cbiAgICB7XG4gICAgICBpZiAoJ2NvbnRleHRUeXBlJyBpbiB0eXBlKSB7XG4gICAgICAgIHZhciBpc1ZhbGlkID0gLy8gQWxsb3cgbnVsbCBmb3IgY29uZGl0aW9uYWwgZGVjbGFyYXRpb25cbiAgICAgICAgY29udGV4dFR5cGUgPT09IG51bGwgfHwgY29udGV4dFR5cGUgIT09IHVuZGVmaW5lZCAmJiBjb250ZXh0VHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFICYmIGNvbnRleHRUeXBlLl9jb250ZXh0ID09PSB1bmRlZmluZWQ7IC8vIE5vdCBhIDxDb250ZXh0LkNvbnN1bWVyPlxuXG4gICAgICAgIGlmICghaXNWYWxpZCAmJiAhZGlkV2FybkFib3V0SW52YWxpZGF0ZUNvbnRleHRUeXBlLmhhcyh0eXBlKSkge1xuICAgICAgICAgIGRpZFdhcm5BYm91dEludmFsaWRhdGVDb250ZXh0VHlwZS5hZGQodHlwZSk7XG4gICAgICAgICAgdmFyIGFkZGVuZHVtID0gJyc7XG5cbiAgICAgICAgICBpZiAoY29udGV4dFR5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYWRkZW5kdW0gPSAnIEhvd2V2ZXIsIGl0IGlzIHNldCB0byB1bmRlZmluZWQuICcgKyAnVGhpcyBjYW4gYmUgY2F1c2VkIGJ5IGEgdHlwbyBvciBieSBtaXhpbmcgdXAgbmFtZWQgYW5kIGRlZmF1bHQgaW1wb3J0cy4gJyArICdUaGlzIGNhbiBhbHNvIGhhcHBlbiBkdWUgdG8gYSBjaXJjdWxhciBkZXBlbmRlbmN5LCBzbyAnICsgJ3RyeSBtb3ZpbmcgdGhlIGNyZWF0ZUNvbnRleHQoKSBjYWxsIHRvIGEgc2VwYXJhdGUgZmlsZS4nO1xuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbnRleHRUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgYWRkZW5kdW0gPSAnIEhvd2V2ZXIsIGl0IGlzIHNldCB0byBhICcgKyB0eXBlb2YgY29udGV4dFR5cGUgKyAnLic7XG4gICAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0VHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSkge1xuICAgICAgICAgICAgYWRkZW5kdW0gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IHBhc3MgdGhlIENvbnRleHQuUHJvdmlkZXIgaW5zdGVhZD8nO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY29udGV4dFR5cGUuX2NvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gPENvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAgICBhZGRlbmR1bSA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgcGFzcyB0aGUgQ29udGV4dC5Db25zdW1lciBpbnN0ZWFkPyc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFkZGVuZHVtID0gJyBIb3dldmVyLCBpdCBpcyBzZXQgdG8gYW4gb2JqZWN0IHdpdGgga2V5cyB7JyArIE9iamVjdC5rZXlzKGNvbnRleHRUeXBlKS5qb2luKCcsICcpICsgJ30uJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvcignJXMgZGVmaW5lcyBhbiBpbnZhbGlkIGNvbnRleHRUeXBlLiAnICsgJ2NvbnRleHRUeXBlIHNob3VsZCBwb2ludCB0byB0aGUgQ29udGV4dCBvYmplY3QgcmV0dXJuZWQgYnkgUmVhY3QuY3JlYXRlQ29udGV4dCgpLiVzJywgZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB8fCAnQ29tcG9uZW50JywgYWRkZW5kdW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb250ZXh0VHlwZSA9PT0gJ29iamVjdCcgJiYgY29udGV4dFR5cGUgIT09IG51bGwpIHtcbiAgICAgIHZhbGlkYXRlQ29udGV4dEJvdW5kcyhjb250ZXh0VHlwZSwgdGhyZWFkSUQpO1xuICAgICAgcmV0dXJuIGNvbnRleHRUeXBlW3RocmVhZElEXTtcbiAgICB9XG5cbiAgICB7XG4gICAgICB2YXIgbWFza2VkQ29udGV4dCA9IG1hc2tDb250ZXh0KHR5cGUsIGNvbnRleHQpO1xuXG4gICAgICB7XG4gICAgICAgIGlmICh0eXBlLmNvbnRleHRUeXBlcykge1xuICAgICAgICAgIGNoZWNrQ29udGV4dFR5cGVzKHR5cGUuY29udGV4dFR5cGVzLCBtYXNrZWRDb250ZXh0LCAnY29udGV4dCcpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtYXNrZWRDb250ZXh0O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB7XG4gICAgICB2YXIgX21hc2tlZENvbnRleHQgPSBtYXNrQ29udGV4dCh0eXBlLCBjb250ZXh0KTtcblxuICAgICAge1xuICAgICAgICBpZiAodHlwZS5jb250ZXh0VHlwZXMpIHtcbiAgICAgICAgICBjaGVja0NvbnRleHRUeXBlcyh0eXBlLmNvbnRleHRUeXBlcywgX21hc2tlZENvbnRleHQsICdjb250ZXh0Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9tYXNrZWRDb250ZXh0O1xuICAgIH1cbiAgfVxufVxuXG52YXIgbmV4dEF2YWlsYWJsZVRocmVhZElEcyA9IG5ldyBVaW50MTZBcnJheSgxNik7XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgMTU7IGkrKykge1xuICBuZXh0QXZhaWxhYmxlVGhyZWFkSURzW2ldID0gaSArIDE7XG59XG5cbm5leHRBdmFpbGFibGVUaHJlYWRJRHNbMTVdID0gMDtcblxuZnVuY3Rpb24gZ3Jvd1RocmVhZENvdW50QW5kUmV0dXJuTmV4dEF2YWlsYWJsZSgpIHtcbiAgdmFyIG9sZEFycmF5ID0gbmV4dEF2YWlsYWJsZVRocmVhZElEcztcbiAgdmFyIG9sZFNpemUgPSBvbGRBcnJheS5sZW5ndGg7XG4gIHZhciBuZXdTaXplID0gb2xkU2l6ZSAqIDI7XG5cbiAgaWYgKCEobmV3U2l6ZSA8PSAweDEwMDAwKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIk1heGltdW0gbnVtYmVyIG9mIGNvbmN1cnJlbnQgUmVhY3QgcmVuZGVyZXJzIGV4Y2VlZGVkLiBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IGFyZSBub3QgcHJvcGVybHkgZGVzdHJveWluZyB0aGUgUmVhZGFibGUgcHJvdmlkZWQgYnkgUmVhY3QuIEVuc3VyZSB0aGF0IHlvdSBjYWxsIC5kZXN0cm95KCkgb24gaXQgaWYgeW91IG5vIGxvbmdlciB3YW50IHRvIHJlYWQgZnJvbSBpdCwgYW5kIGRpZCBub3QgcmVhZCB0byB0aGUgZW5kLiBJZiB5b3UgdXNlIC5waXBlKCkgdGhpcyBzaG91bGQgYmUgYXV0b21hdGljLlwiICk7XG4gICAgfVxuICB9XG5cbiAgdmFyIG5ld0FycmF5ID0gbmV3IFVpbnQxNkFycmF5KG5ld1NpemUpO1xuICBuZXdBcnJheS5zZXQob2xkQXJyYXkpO1xuICBuZXh0QXZhaWxhYmxlVGhyZWFkSURzID0gbmV3QXJyYXk7XG4gIG5leHRBdmFpbGFibGVUaHJlYWRJRHNbMF0gPSBvbGRTaXplICsgMTtcblxuICBmb3IgKHZhciBfaSA9IG9sZFNpemU7IF9pIDwgbmV3U2l6ZSAtIDE7IF9pKyspIHtcbiAgICBuZXh0QXZhaWxhYmxlVGhyZWFkSURzW19pXSA9IF9pICsgMTtcbiAgfVxuXG4gIG5leHRBdmFpbGFibGVUaHJlYWRJRHNbbmV3U2l6ZSAtIDFdID0gMDtcbiAgcmV0dXJuIG9sZFNpemU7XG59XG5cbmZ1bmN0aW9uIGFsbG9jVGhyZWFkSUQoKSB7XG4gIHZhciBuZXh0SUQgPSBuZXh0QXZhaWxhYmxlVGhyZWFkSURzWzBdO1xuXG4gIGlmIChuZXh0SUQgPT09IDApIHtcbiAgICByZXR1cm4gZ3Jvd1RocmVhZENvdW50QW5kUmV0dXJuTmV4dEF2YWlsYWJsZSgpO1xuICB9XG5cbiAgbmV4dEF2YWlsYWJsZVRocmVhZElEc1swXSA9IG5leHRBdmFpbGFibGVUaHJlYWRJRHNbbmV4dElEXTtcbiAgcmV0dXJuIG5leHRJRDtcbn1cbmZ1bmN0aW9uIGZyZWVUaHJlYWRJRChpZCkge1xuICBuZXh0QXZhaWxhYmxlVGhyZWFkSURzW2lkXSA9IG5leHRBdmFpbGFibGVUaHJlYWRJRHNbMF07XG4gIG5leHRBdmFpbGFibGVUaHJlYWRJRHNbMF0gPSBpZDtcbn1cblxuLy8gQSByZXNlcnZlZCBhdHRyaWJ1dGUuXG4vLyBJdCBpcyBoYW5kbGVkIGJ5IFJlYWN0IHNlcGFyYXRlbHkgYW5kIHNob3VsZG4ndCBiZSB3cml0dGVuIHRvIHRoZSBET00uXG52YXIgUkVTRVJWRUQgPSAwOyAvLyBBIHNpbXBsZSBzdHJpbmcgYXR0cmlidXRlLlxuLy8gQXR0cmlidXRlcyB0aGF0IGFyZW4ndCBpbiB0aGUgd2hpdGVsaXN0IGFyZSBwcmVzdW1lZCB0byBoYXZlIHRoaXMgdHlwZS5cblxudmFyIFNUUklORyA9IDE7IC8vIEEgc3RyaW5nIGF0dHJpYnV0ZSB0aGF0IGFjY2VwdHMgYm9vbGVhbnMgaW4gUmVhY3QuIEluIEhUTUwsIHRoZXNlIGFyZSBjYWxsZWRcbi8vIFwiZW51bWVyYXRlZFwiIGF0dHJpYnV0ZXMgd2l0aCBcInRydWVcIiBhbmQgXCJmYWxzZVwiIGFzIHBvc3NpYmxlIHZhbHVlcy5cbi8vIFdoZW4gdHJ1ZSwgaXQgc2hvdWxkIGJlIHNldCB0byBhIFwidHJ1ZVwiIHN0cmluZy5cbi8vIFdoZW4gZmFsc2UsIGl0IHNob3VsZCBiZSBzZXQgdG8gYSBcImZhbHNlXCIgc3RyaW5nLlxuXG52YXIgQk9PTEVBTklTSF9TVFJJTkcgPSAyOyAvLyBBIHJlYWwgYm9vbGVhbiBhdHRyaWJ1dGUuXG4vLyBXaGVuIHRydWUsIGl0IHNob3VsZCBiZSBwcmVzZW50IChzZXQgZWl0aGVyIHRvIGFuIGVtcHR5IHN0cmluZyBvciBpdHMgbmFtZSkuXG4vLyBXaGVuIGZhbHNlLCBpdCBzaG91bGQgYmUgb21pdHRlZC5cblxudmFyIEJPT0xFQU4gPSAzOyAvLyBBbiBhdHRyaWJ1dGUgdGhhdCBjYW4gYmUgdXNlZCBhcyBhIGZsYWcgYXMgd2VsbCBhcyB3aXRoIGEgdmFsdWUuXG4vLyBXaGVuIHRydWUsIGl0IHNob3VsZCBiZSBwcmVzZW50IChzZXQgZWl0aGVyIHRvIGFuIGVtcHR5IHN0cmluZyBvciBpdHMgbmFtZSkuXG4vLyBXaGVuIGZhbHNlLCBpdCBzaG91bGQgYmUgb21pdHRlZC5cbi8vIEZvciBhbnkgb3RoZXIgdmFsdWUsIHNob3VsZCBiZSBwcmVzZW50IHdpdGggdGhhdCB2YWx1ZS5cblxudmFyIE9WRVJMT0FERURfQk9PTEVBTiA9IDQ7IC8vIEFuIGF0dHJpYnV0ZSB0aGF0IG11c3QgYmUgbnVtZXJpYyBvciBwYXJzZSBhcyBhIG51bWVyaWMuXG4vLyBXaGVuIGZhbHN5LCBpdCBzaG91bGQgYmUgcmVtb3ZlZC5cblxudmFyIE5VTUVSSUMgPSA1OyAvLyBBbiBhdHRyaWJ1dGUgdGhhdCBtdXN0IGJlIHBvc2l0aXZlIG51bWVyaWMgb3IgcGFyc2UgYXMgYSBwb3NpdGl2ZSBudW1lcmljLlxuLy8gV2hlbiBmYWxzeSwgaXQgc2hvdWxkIGJlIHJlbW92ZWQuXG5cbnZhciBQT1NJVElWRV9OVU1FUklDID0gNjtcblxuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xudmFyIEFUVFJJQlVURV9OQU1FX1NUQVJUX0NIQVIgPSBcIjpBLVpfYS16XFxcXHUwMEMwLVxcXFx1MDBENlxcXFx1MDBEOC1cXFxcdTAwRjZcXFxcdTAwRjgtXFxcXHUwMkZGXFxcXHUwMzcwLVxcXFx1MDM3RFxcXFx1MDM3Ri1cXFxcdTFGRkZcXFxcdTIwMEMtXFxcXHUyMDBEXFxcXHUyMDcwLVxcXFx1MjE4RlxcXFx1MkMwMC1cXFxcdTJGRUZcXFxcdTMwMDEtXFxcXHVEN0ZGXFxcXHVGOTAwLVxcXFx1RkRDRlxcXFx1RkRGMC1cXFxcdUZGRkRcIjtcbi8qIGVzbGludC1lbmFibGUgbWF4LWxlbiAqL1xuXG52YXIgQVRUUklCVVRFX05BTUVfQ0hBUiA9IEFUVFJJQlVURV9OQU1FX1NUQVJUX0NIQVIgKyBcIlxcXFwtLjAtOVxcXFx1MDBCN1xcXFx1MDMwMC1cXFxcdTAzNkZcXFxcdTIwM0YtXFxcXHUyMDQwXCI7XG52YXIgUk9PVF9BVFRSSUJVVEVfTkFNRSA9ICdkYXRhLXJlYWN0cm9vdCc7XG52YXIgVkFMSURfQVRUUklCVVRFX05BTUVfUkVHRVggPSBuZXcgUmVnRXhwKCdeWycgKyBBVFRSSUJVVEVfTkFNRV9TVEFSVF9DSEFSICsgJ11bJyArIEFUVFJJQlVURV9OQU1FX0NIQVIgKyAnXSokJyk7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIGlsbGVnYWxBdHRyaWJ1dGVOYW1lQ2FjaGUgPSB7fTtcbnZhciB2YWxpZGF0ZWRBdHRyaWJ1dGVOYW1lQ2FjaGUgPSB7fTtcbmZ1bmN0aW9uIGlzQXR0cmlidXRlTmFtZVNhZmUoYXR0cmlidXRlTmFtZSkge1xuICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbCh2YWxpZGF0ZWRBdHRyaWJ1dGVOYW1lQ2FjaGUsIGF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChpbGxlZ2FsQXR0cmlidXRlTmFtZUNhY2hlLCBhdHRyaWJ1dGVOYW1lKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChWQUxJRF9BVFRSSUJVVEVfTkFNRV9SRUdFWC50ZXN0KGF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgdmFsaWRhdGVkQXR0cmlidXRlTmFtZUNhY2hlW2F0dHJpYnV0ZU5hbWVdID0gdHJ1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlsbGVnYWxBdHRyaWJ1dGVOYW1lQ2FjaGVbYXR0cmlidXRlTmFtZV0gPSB0cnVlO1xuXG4gIHtcbiAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgbmFtZTogYCVzYCcsIGF0dHJpYnV0ZU5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gc2hvdWxkSWdub3JlQXR0cmlidXRlKG5hbWUsIHByb3BlcnR5SW5mbywgaXNDdXN0b21Db21wb25lbnRUYWcpIHtcbiAgaWYgKHByb3BlcnR5SW5mbyAhPT0gbnVsbCkge1xuICAgIHJldHVybiBwcm9wZXJ0eUluZm8udHlwZSA9PT0gUkVTRVJWRUQ7XG4gIH1cblxuICBpZiAoaXNDdXN0b21Db21wb25lbnRUYWcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAobmFtZS5sZW5ndGggPiAyICYmIChuYW1lWzBdID09PSAnbycgfHwgbmFtZVswXSA9PT0gJ08nKSAmJiAobmFtZVsxXSA9PT0gJ24nIHx8IG5hbWVbMV0gPT09ICdOJykpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIHNob3VsZFJlbW92ZUF0dHJpYnV0ZVdpdGhXYXJuaW5nKG5hbWUsIHZhbHVlLCBwcm9wZXJ0eUluZm8sIGlzQ3VzdG9tQ29tcG9uZW50VGFnKSB7XG4gIGlmIChwcm9wZXJ0eUluZm8gIT09IG51bGwgJiYgcHJvcGVydHlJbmZvLnR5cGUgPT09IFJFU0VSVkVEKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICBjYXNlICdmdW5jdGlvbic6IC8vICRGbG93SXNzdWUgc3ltYm9sIGlzIHBlcmZlY3RseSB2YWxpZCBoZXJlXG5cbiAgICBjYXNlICdzeW1ib2wnOlxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIHtcbiAgICAgICAgaWYgKGlzQ3VzdG9tQ29tcG9uZW50VGFnKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BlcnR5SW5mbyAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiAhcHJvcGVydHlJbmZvLmFjY2VwdHNCb29sZWFucztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgcHJlZml4ID0gbmFtZS50b0xvd2VyQ2FzZSgpLnNsaWNlKDAsIDUpO1xuICAgICAgICAgIHJldHVybiBwcmVmaXggIT09ICdkYXRhLScgJiYgcHJlZml4ICE9PSAnYXJpYS0nO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5mdW5jdGlvbiBzaG91bGRSZW1vdmVBdHRyaWJ1dGUobmFtZSwgdmFsdWUsIHByb3BlcnR5SW5mbywgaXNDdXN0b21Db21wb25lbnRUYWcpIHtcbiAgaWYgKHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChzaG91bGRSZW1vdmVBdHRyaWJ1dGVXaXRoV2FybmluZyhuYW1lLCB2YWx1ZSwgcHJvcGVydHlJbmZvLCBpc0N1c3RvbUNvbXBvbmVudFRhZykpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChpc0N1c3RvbUNvbXBvbmVudFRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChwcm9wZXJ0eUluZm8gIT09IG51bGwpIHtcbiAgICBzd2l0Y2ggKHByb3BlcnR5SW5mby50eXBlKSB7XG4gICAgICBjYXNlIEJPT0xFQU46XG4gICAgICAgIHJldHVybiAhdmFsdWU7XG5cbiAgICAgIGNhc2UgT1ZFUkxPQURFRF9CT09MRUFOOlxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IGZhbHNlO1xuXG4gICAgICBjYXNlIE5VTUVSSUM6XG4gICAgICAgIHJldHVybiBpc05hTih2YWx1ZSk7XG5cbiAgICAgIGNhc2UgUE9TSVRJVkVfTlVNRVJJQzpcbiAgICAgICAgcmV0dXJuIGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA8IDE7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gZ2V0UHJvcGVydHlJbmZvKG5hbWUpIHtcbiAgcmV0dXJuIHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkobmFtZSkgPyBwcm9wZXJ0aWVzW25hbWVdIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIHR5cGUsIG11c3RVc2VQcm9wZXJ0eSwgYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlTmFtZXNwYWNlLCBzYW5pdGl6ZVVSTCkge1xuICB0aGlzLmFjY2VwdHNCb29sZWFucyA9IHR5cGUgPT09IEJPT0xFQU5JU0hfU1RSSU5HIHx8IHR5cGUgPT09IEJPT0xFQU4gfHwgdHlwZSA9PT0gT1ZFUkxPQURFRF9CT09MRUFOO1xuICB0aGlzLmF0dHJpYnV0ZU5hbWUgPSBhdHRyaWJ1dGVOYW1lO1xuICB0aGlzLmF0dHJpYnV0ZU5hbWVzcGFjZSA9IGF0dHJpYnV0ZU5hbWVzcGFjZTtcbiAgdGhpcy5tdXN0VXNlUHJvcGVydHkgPSBtdXN0VXNlUHJvcGVydHk7XG4gIHRoaXMucHJvcGVydHlOYW1lID0gbmFtZTtcbiAgdGhpcy50eXBlID0gdHlwZTtcbiAgdGhpcy5zYW5pdGl6ZVVSTCA9IHNhbml0aXplVVJMO1xufSAvLyBXaGVuIGFkZGluZyBhdHRyaWJ1dGVzIHRvIHRoaXMgbGlzdCwgYmUgc3VyZSB0byBhbHNvIGFkZCB0aGVtIHRvXG4vLyB0aGUgYHBvc3NpYmxlU3RhbmRhcmROYW1lc2AgbW9kdWxlIHRvIGVuc3VyZSBjYXNpbmcgYW5kIGluY29ycmVjdFxuLy8gbmFtZSB3YXJuaW5ncy5cblxuXG52YXIgcHJvcGVydGllcyA9IHt9OyAvLyBUaGVzZSBwcm9wcyBhcmUgcmVzZXJ2ZWQgYnkgUmVhY3QuIFRoZXkgc2hvdWxkbid0IGJlIHdyaXR0ZW4gdG8gdGhlIERPTS5cblxudmFyIHJlc2VydmVkUHJvcHMgPSBbJ2NoaWxkcmVuJywgJ2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MJywgLy8gVE9ETzogVGhpcyBwcmV2ZW50cyB0aGUgYXNzaWdubWVudCBvZiBkZWZhdWx0VmFsdWUgdG8gcmVndWxhclxuLy8gZWxlbWVudHMgKG5vdCBqdXN0IGlucHV0cykuIE5vdyB0aGF0IFJlYWN0RE9NSW5wdXQgYXNzaWducyB0byB0aGVcbi8vIGRlZmF1bHRWYWx1ZSBwcm9wZXJ0eSAtLSBkbyB3ZSBuZWVkIHRoaXM/XG4nZGVmYXVsdFZhbHVlJywgJ2RlZmF1bHRDaGVja2VkJywgJ2lubmVySFRNTCcsICdzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmcnLCAnc3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nJywgJ3N0eWxlJ107XG5cbnJlc2VydmVkUHJvcHMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBSRVNFUlZFRCwgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBuYW1lLCAvLyBhdHRyaWJ1dGVOYW1lXG4gIG51bGwsIC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxuICBmYWxzZSk7XG59KTsgLy8gQSBmZXcgUmVhY3Qgc3RyaW5nIGF0dHJpYnV0ZXMgaGF2ZSBhIGRpZmZlcmVudCBuYW1lLlxuLy8gVGhpcyBpcyBhIG1hcHBpbmcgZnJvbSBSZWFjdCBwcm9wIG5hbWVzIHRvIHRoZSBhdHRyaWJ1dGUgbmFtZXMuXG5cbltbJ2FjY2VwdENoYXJzZXQnLCAnYWNjZXB0LWNoYXJzZXQnXSwgWydjbGFzc05hbWUnLCAnY2xhc3MnXSwgWydodG1sRm9yJywgJ2ZvciddLCBbJ2h0dHBFcXVpdicsICdodHRwLWVxdWl2J11dLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIG5hbWUgPSBfcmVmWzBdLFxuICAgICAgYXR0cmlidXRlTmFtZSA9IF9yZWZbMV07XG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIFNUUklORywgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBhdHRyaWJ1dGVOYW1lLCAvLyBhdHRyaWJ1dGVOYW1lXG4gIG51bGwsIC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxuICBmYWxzZSk7XG59KTsgLy8gVGhlc2UgYXJlIFwiZW51bWVyYXRlZFwiIEhUTUwgYXR0cmlidXRlcyB0aGF0IGFjY2VwdCBcInRydWVcIiBhbmQgXCJmYWxzZVwiLlxuLy8gSW4gUmVhY3QsIHdlIGxldCB1c2VycyBwYXNzIGB0cnVlYCBhbmQgYGZhbHNlYCBldmVuIHRob3VnaCB0ZWNobmljYWxseVxuLy8gdGhlc2UgYXJlbid0IGJvb2xlYW4gYXR0cmlidXRlcyAodGhleSBhcmUgY29lcmNlZCB0byBzdHJpbmdzKS5cblxuWydjb250ZW50RWRpdGFibGUnLCAnZHJhZ2dhYmxlJywgJ3NwZWxsQ2hlY2snLCAndmFsdWUnXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIEJPT0xFQU5JU0hfU1RSSU5HLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIG5hbWUudG9Mb3dlckNhc2UoKSwgLy8gYXR0cmlidXRlTmFtZVxuICBudWxsLCAvLyBhdHRyaWJ1dGVOYW1lc3BhY2VcbiAgZmFsc2UpO1xufSk7IC8vIFRoZXNlIGFyZSBcImVudW1lcmF0ZWRcIiBTVkcgYXR0cmlidXRlcyB0aGF0IGFjY2VwdCBcInRydWVcIiBhbmQgXCJmYWxzZVwiLlxuLy8gSW4gUmVhY3QsIHdlIGxldCB1c2VycyBwYXNzIGB0cnVlYCBhbmQgYGZhbHNlYCBldmVuIHRob3VnaCB0ZWNobmljYWxseVxuLy8gdGhlc2UgYXJlbid0IGJvb2xlYW4gYXR0cmlidXRlcyAodGhleSBhcmUgY29lcmNlZCB0byBzdHJpbmdzKS5cbi8vIFNpbmNlIHRoZXNlIGFyZSBTVkcgYXR0cmlidXRlcywgdGhlaXIgYXR0cmlidXRlIG5hbWVzIGFyZSBjYXNlLXNlbnNpdGl2ZS5cblxuWydhdXRvUmV2ZXJzZScsICdleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkJywgJ2ZvY3VzYWJsZScsICdwcmVzZXJ2ZUFscGhhJ10uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBCT09MRUFOSVNIX1NUUklORywgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBuYW1lLCAvLyBhdHRyaWJ1dGVOYW1lXG4gIG51bGwsIC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxuICBmYWxzZSk7XG59KTsgLy8gVGhlc2UgYXJlIEhUTUwgYm9vbGVhbiBhdHRyaWJ1dGVzLlxuXG5bJ2FsbG93RnVsbFNjcmVlbicsICdhc3luYycsIC8vIE5vdGU6IHRoZXJlIGlzIGEgc3BlY2lhbCBjYXNlIHRoYXQgcHJldmVudHMgaXQgZnJvbSBiZWluZyB3cml0dGVuIHRvIHRoZSBET01cbi8vIG9uIHRoZSBjbGllbnQgc2lkZSBiZWNhdXNlIHRoZSBicm93c2VycyBhcmUgaW5jb25zaXN0ZW50LiBJbnN0ZWFkIHdlIGNhbGwgZm9jdXMoKS5cbidhdXRvRm9jdXMnLCAnYXV0b1BsYXknLCAnY29udHJvbHMnLCAnZGVmYXVsdCcsICdkZWZlcicsICdkaXNhYmxlZCcsICdkaXNhYmxlUGljdHVyZUluUGljdHVyZScsICdmb3JtTm9WYWxpZGF0ZScsICdoaWRkZW4nLCAnbG9vcCcsICdub01vZHVsZScsICdub1ZhbGlkYXRlJywgJ29wZW4nLCAncGxheXNJbmxpbmUnLCAncmVhZE9ubHknLCAncmVxdWlyZWQnLCAncmV2ZXJzZWQnLCAnc2NvcGVkJywgJ3NlYW1sZXNzJywgLy8gTWljcm9kYXRhXG4naXRlbVNjb3BlJ10uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBCT09MRUFOLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIG5hbWUudG9Mb3dlckNhc2UoKSwgLy8gYXR0cmlidXRlTmFtZVxuICBudWxsLCAvLyBhdHRyaWJ1dGVOYW1lc3BhY2VcbiAgZmFsc2UpO1xufSk7IC8vIFRoZXNlIGFyZSB0aGUgZmV3IFJlYWN0IHByb3BzIHRoYXQgd2Ugc2V0IGFzIERPTSBwcm9wZXJ0aWVzXG4vLyByYXRoZXIgdGhhbiBhdHRyaWJ1dGVzLiBUaGVzZSBhcmUgYWxsIGJvb2xlYW5zLlxuXG5bJ2NoZWNrZWQnLCAvLyBOb3RlOiBgb3B0aW9uLnNlbGVjdGVkYCBpcyBub3QgdXBkYXRlZCBpZiBgc2VsZWN0Lm11bHRpcGxlYCBpc1xuLy8gZGlzYWJsZWQgd2l0aCBgcmVtb3ZlQXR0cmlidXRlYC4gV2UgaGF2ZSBzcGVjaWFsIGxvZ2ljIGZvciBoYW5kbGluZyB0aGlzLlxuJ211bHRpcGxlJywgJ211dGVkJywgJ3NlbGVjdGVkJyAvLyBOT1RFOiBpZiB5b3UgYWRkIGEgY2FtZWxDYXNlZCBwcm9wIHRvIHRoaXMgbGlzdCxcbi8vIHlvdSdsbCBuZWVkIHRvIHNldCBhdHRyaWJ1dGVOYW1lIHRvIG5hbWUudG9Mb3dlckNhc2UoKVxuLy8gaW5zdGVhZCBpbiB0aGUgYXNzaWdubWVudCBiZWxvdy5cbl0uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBCT09MRUFOLCB0cnVlLCAvLyBtdXN0VXNlUHJvcGVydHlcbiAgbmFtZSwgLy8gYXR0cmlidXRlTmFtZVxuICBudWxsLCAvLyBhdHRyaWJ1dGVOYW1lc3BhY2VcbiAgZmFsc2UpO1xufSk7IC8vIFRoZXNlIGFyZSBIVE1MIGF0dHJpYnV0ZXMgdGhhdCBhcmUgXCJvdmVybG9hZGVkIGJvb2xlYW5zXCI6IHRoZXkgYmVoYXZlIGxpa2Vcbi8vIGJvb2xlYW5zLCBidXQgY2FuIGFsc28gYWNjZXB0IGEgc3RyaW5nIHZhbHVlLlxuXG5bJ2NhcHR1cmUnLCAnZG93bmxvYWQnIC8vIE5PVEU6IGlmIHlvdSBhZGQgYSBjYW1lbENhc2VkIHByb3AgdG8gdGhpcyBsaXN0LFxuLy8geW91J2xsIG5lZWQgdG8gc2V0IGF0dHJpYnV0ZU5hbWUgdG8gbmFtZS50b0xvd2VyQ2FzZSgpXG4vLyBpbnN0ZWFkIGluIHRoZSBhc3NpZ25tZW50IGJlbG93LlxuXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIE9WRVJMT0FERURfQk9PTEVBTiwgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBuYW1lLCAvLyBhdHRyaWJ1dGVOYW1lXG4gIG51bGwsIC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxuICBmYWxzZSk7XG59KTsgLy8gVGhlc2UgYXJlIEhUTUwgYXR0cmlidXRlcyB0aGF0IG11c3QgYmUgcG9zaXRpdmUgbnVtYmVycy5cblxuWydjb2xzJywgJ3Jvd3MnLCAnc2l6ZScsICdzcGFuJyAvLyBOT1RFOiBpZiB5b3UgYWRkIGEgY2FtZWxDYXNlZCBwcm9wIHRvIHRoaXMgbGlzdCxcbi8vIHlvdSdsbCBuZWVkIHRvIHNldCBhdHRyaWJ1dGVOYW1lIHRvIG5hbWUudG9Mb3dlckNhc2UoKVxuLy8gaW5zdGVhZCBpbiB0aGUgYXNzaWdubWVudCBiZWxvdy5cbl0uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBQT1NJVElWRV9OVU1FUklDLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIG5hbWUsIC8vIGF0dHJpYnV0ZU5hbWVcbiAgbnVsbCwgLy8gYXR0cmlidXRlTmFtZXNwYWNlXG4gIGZhbHNlKTtcbn0pOyAvLyBUaGVzZSBhcmUgSFRNTCBhdHRyaWJ1dGVzIHRoYXQgbXVzdCBiZSBudW1iZXJzLlxuXG5bJ3Jvd1NwYW4nLCAnc3RhcnQnXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIE5VTUVSSUMsIGZhbHNlLCAvLyBtdXN0VXNlUHJvcGVydHlcbiAgbmFtZS50b0xvd2VyQ2FzZSgpLCAvLyBhdHRyaWJ1dGVOYW1lXG4gIG51bGwsIC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxuICBmYWxzZSk7XG59KTtcbnZhciBDQU1FTElaRSA9IC9bXFwtXFw6XShbYS16XSkvZztcblxudmFyIGNhcGl0YWxpemUgPSBmdW5jdGlvbiAodG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuWzFdLnRvVXBwZXJDYXNlKCk7XG59OyAvLyBUaGlzIGlzIGEgbGlzdCBvZiBhbGwgU1ZHIGF0dHJpYnV0ZXMgdGhhdCBuZWVkIHNwZWNpYWwgY2FzaW5nLCBuYW1lc3BhY2luZyxcbi8vIG9yIGJvb2xlYW4gdmFsdWUgYXNzaWdubWVudC4gUmVndWxhciBhdHRyaWJ1dGVzIHRoYXQganVzdCBhY2NlcHQgc3RyaW5nc1xuLy8gYW5kIGhhdmUgdGhlIHNhbWUgbmFtZXMgYXJlIG9taXR0ZWQsIGp1c3QgbGlrZSBpbiB0aGUgSFRNTCB3aGl0ZWxpc3QuXG4vLyBTb21lIG9mIHRoZXNlIGF0dHJpYnV0ZXMgY2FuIGJlIGhhcmQgdG8gZmluZC4gVGhpcyBsaXN0IHdhcyBjcmVhdGVkIGJ5XG4vLyBzY3JhcGluZyB0aGUgTUROIGRvY3VtZW50YXRpb24uXG5cblxuWydhY2NlbnQtaGVpZ2h0JywgJ2FsaWdubWVudC1iYXNlbGluZScsICdhcmFiaWMtZm9ybScsICdiYXNlbGluZS1zaGlmdCcsICdjYXAtaGVpZ2h0JywgJ2NsaXAtcGF0aCcsICdjbGlwLXJ1bGUnLCAnY29sb3ItaW50ZXJwb2xhdGlvbicsICdjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnMnLCAnY29sb3ItcHJvZmlsZScsICdjb2xvci1yZW5kZXJpbmcnLCAnZG9taW5hbnQtYmFzZWxpbmUnLCAnZW5hYmxlLWJhY2tncm91bmQnLCAnZmlsbC1vcGFjaXR5JywgJ2ZpbGwtcnVsZScsICdmbG9vZC1jb2xvcicsICdmbG9vZC1vcGFjaXR5JywgJ2ZvbnQtZmFtaWx5JywgJ2ZvbnQtc2l6ZScsICdmb250LXNpemUtYWRqdXN0JywgJ2ZvbnQtc3RyZXRjaCcsICdmb250LXN0eWxlJywgJ2ZvbnQtdmFyaWFudCcsICdmb250LXdlaWdodCcsICdnbHlwaC1uYW1lJywgJ2dseXBoLW9yaWVudGF0aW9uLWhvcml6b250YWwnLCAnZ2x5cGgtb3JpZW50YXRpb24tdmVydGljYWwnLCAnaG9yaXotYWR2LXgnLCAnaG9yaXotb3JpZ2luLXgnLCAnaW1hZ2UtcmVuZGVyaW5nJywgJ2xldHRlci1zcGFjaW5nJywgJ2xpZ2h0aW5nLWNvbG9yJywgJ21hcmtlci1lbmQnLCAnbWFya2VyLW1pZCcsICdtYXJrZXItc3RhcnQnLCAnb3ZlcmxpbmUtcG9zaXRpb24nLCAnb3ZlcmxpbmUtdGhpY2tuZXNzJywgJ3BhaW50LW9yZGVyJywgJ3Bhbm9zZS0xJywgJ3BvaW50ZXItZXZlbnRzJywgJ3JlbmRlcmluZy1pbnRlbnQnLCAnc2hhcGUtcmVuZGVyaW5nJywgJ3N0b3AtY29sb3InLCAnc3RvcC1vcGFjaXR5JywgJ3N0cmlrZXRocm91Z2gtcG9zaXRpb24nLCAnc3RyaWtldGhyb3VnaC10aGlja25lc3MnLCAnc3Ryb2tlLWRhc2hhcnJheScsICdzdHJva2UtZGFzaG9mZnNldCcsICdzdHJva2UtbGluZWNhcCcsICdzdHJva2UtbGluZWpvaW4nLCAnc3Ryb2tlLW1pdGVybGltaXQnLCAnc3Ryb2tlLW9wYWNpdHknLCAnc3Ryb2tlLXdpZHRoJywgJ3RleHQtYW5jaG9yJywgJ3RleHQtZGVjb3JhdGlvbicsICd0ZXh0LXJlbmRlcmluZycsICd1bmRlcmxpbmUtcG9zaXRpb24nLCAndW5kZXJsaW5lLXRoaWNrbmVzcycsICd1bmljb2RlLWJpZGknLCAndW5pY29kZS1yYW5nZScsICd1bml0cy1wZXItZW0nLCAndi1hbHBoYWJldGljJywgJ3YtaGFuZ2luZycsICd2LWlkZW9ncmFwaGljJywgJ3YtbWF0aGVtYXRpY2FsJywgJ3ZlY3Rvci1lZmZlY3QnLCAndmVydC1hZHYteScsICd2ZXJ0LW9yaWdpbi14JywgJ3ZlcnQtb3JpZ2luLXknLCAnd29yZC1zcGFjaW5nJywgJ3dyaXRpbmctbW9kZScsICd4bWxuczp4bGluaycsICd4LWhlaWdodCcgLy8gTk9URTogaWYgeW91IGFkZCBhIGNhbWVsQ2FzZWQgcHJvcCB0byB0aGlzIGxpc3QsXG4vLyB5b3UnbGwgbmVlZCB0byBzZXQgYXR0cmlidXRlTmFtZSB0byBuYW1lLnRvTG93ZXJDYXNlKClcbi8vIGluc3RlYWQgaW4gdGhlIGFzc2lnbm1lbnQgYmVsb3cuXG5dLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZU5hbWUpIHtcbiAgdmFyIG5hbWUgPSBhdHRyaWJ1dGVOYW1lLnJlcGxhY2UoQ0FNRUxJWkUsIGNhcGl0YWxpemUpO1xuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBTVFJJTkcsIGZhbHNlLCAvLyBtdXN0VXNlUHJvcGVydHlcbiAgYXR0cmlidXRlTmFtZSwgbnVsbCwgLy8gYXR0cmlidXRlTmFtZXNwYWNlXG4gIGZhbHNlKTtcbn0pOyAvLyBTdHJpbmcgU1ZHIGF0dHJpYnV0ZXMgd2l0aCB0aGUgeGxpbmsgbmFtZXNwYWNlLlxuXG5bJ3hsaW5rOmFjdHVhdGUnLCAneGxpbms6YXJjcm9sZScsICd4bGluazpyb2xlJywgJ3hsaW5rOnNob3cnLCAneGxpbms6dGl0bGUnLCAneGxpbms6dHlwZScgLy8gTk9URTogaWYgeW91IGFkZCBhIGNhbWVsQ2FzZWQgcHJvcCB0byB0aGlzIGxpc3QsXG4vLyB5b3UnbGwgbmVlZCB0byBzZXQgYXR0cmlidXRlTmFtZSB0byBuYW1lLnRvTG93ZXJDYXNlKClcbi8vIGluc3RlYWQgaW4gdGhlIGFzc2lnbm1lbnQgYmVsb3cuXG5dLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZU5hbWUpIHtcbiAgdmFyIG5hbWUgPSBhdHRyaWJ1dGVOYW1lLnJlcGxhY2UoQ0FNRUxJWkUsIGNhcGl0YWxpemUpO1xuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBTVFJJTkcsIGZhbHNlLCAvLyBtdXN0VXNlUHJvcGVydHlcbiAgYXR0cmlidXRlTmFtZSwgJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCBmYWxzZSk7XG59KTsgLy8gU3RyaW5nIFNWRyBhdHRyaWJ1dGVzIHdpdGggdGhlIHhtbCBuYW1lc3BhY2UuXG5cblsneG1sOmJhc2UnLCAneG1sOmxhbmcnLCAneG1sOnNwYWNlJyAvLyBOT1RFOiBpZiB5b3UgYWRkIGEgY2FtZWxDYXNlZCBwcm9wIHRvIHRoaXMgbGlzdCxcbi8vIHlvdSdsbCBuZWVkIHRvIHNldCBhdHRyaWJ1dGVOYW1lIHRvIG5hbWUudG9Mb3dlckNhc2UoKVxuLy8gaW5zdGVhZCBpbiB0aGUgYXNzaWdubWVudCBiZWxvdy5cbl0uZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlTmFtZSkge1xuICB2YXIgbmFtZSA9IGF0dHJpYnV0ZU5hbWUucmVwbGFjZShDQU1FTElaRSwgY2FwaXRhbGl6ZSk7XG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIFNUUklORywgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBhdHRyaWJ1dGVOYW1lLCAnaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlJywgZmFsc2UpO1xufSk7IC8vIFRoZXNlIGF0dHJpYnV0ZSBleGlzdHMgYm90aCBpbiBIVE1MIGFuZCBTVkcuXG4vLyBUaGUgYXR0cmlidXRlIG5hbWUgaXMgY2FzZS1zZW5zaXRpdmUgaW4gU1ZHIHNvIHdlIGNhbid0IGp1c3QgdXNlXG4vLyB0aGUgUmVhY3QgbmFtZSBsaWtlIHdlIGRvIGZvciBhdHRyaWJ1dGVzIHRoYXQgZXhpc3Qgb25seSBpbiBIVE1MLlxuXG5bJ3RhYkluZGV4JywgJ2Nyb3NzT3JpZ2luJ10uZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlTmFtZSkge1xuICBwcm9wZXJ0aWVzW2F0dHJpYnV0ZU5hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChhdHRyaWJ1dGVOYW1lLCBTVFJJTkcsIGZhbHNlLCAvLyBtdXN0VXNlUHJvcGVydHlcbiAgYXR0cmlidXRlTmFtZS50b0xvd2VyQ2FzZSgpLCAvLyBhdHRyaWJ1dGVOYW1lXG4gIG51bGwsIC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxuICBmYWxzZSk7XG59KTsgLy8gVGhlc2UgYXR0cmlidXRlcyBhY2NlcHQgVVJMcy4gVGhlc2UgbXVzdCBub3QgYWxsb3cgamF2YXNjcmlwdDogVVJMUy5cbi8vIFRoZXNlIHdpbGwgYWxzbyBuZWVkIHRvIGFjY2VwdCBUcnVzdGVkIFR5cGVzIG9iamVjdCBpbiB0aGUgZnV0dXJlLlxuXG52YXIgeGxpbmtIcmVmID0gJ3hsaW5rSHJlZic7XG5wcm9wZXJ0aWVzW3hsaW5rSHJlZl0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKCd4bGlua0hyZWYnLCBTVFJJTkcsIGZhbHNlLCAvLyBtdXN0VXNlUHJvcGVydHlcbid4bGluazpocmVmJywgJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCB0cnVlKTtcblsnc3JjJywgJ2hyZWYnLCAnYWN0aW9uJywgJ2Zvcm1BY3Rpb24nXS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGVOYW1lKSB7XG4gIHByb3BlcnRpZXNbYXR0cmlidXRlTmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKGF0dHJpYnV0ZU5hbWUsIFNUUklORywgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBhdHRyaWJ1dGVOYW1lLnRvTG93ZXJDYXNlKCksIC8vIGF0dHJpYnV0ZU5hbWVcbiAgbnVsbCwgLy8gYXR0cmlidXRlTmFtZXNwYWNlXG4gIHRydWUpO1xufSk7XG5cbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBudWxsO1xuXG57XG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG59IC8vIEEgamF2YXNjcmlwdDogVVJMIGNhbiBjb250YWluIGxlYWRpbmcgQzAgY29udHJvbCBvciBcXHUwMDIwIFNQQUNFLFxuLy8gYW5kIGFueSBuZXdsaW5lIG9yIHRhYiBhcmUgZmlsdGVyZWQgb3V0IGFzIGlmIHRoZXkncmUgbm90IHBhcnQgb2YgdGhlIFVSTC5cbi8vIGh0dHBzOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsLXBhcnNpbmdcbi8vIFRhYiBvciBuZXdsaW5lIGFyZSBkZWZpbmVkIGFzIFxcclxcblxcdDpcbi8vIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNhc2NpaS10YWItb3ItbmV3bGluZVxuLy8gQSBDMCBjb250cm9sIGlzIGEgY29kZSBwb2ludCBpbiB0aGUgcmFuZ2UgXFx1MDAwMCBOVUxMIHRvIFxcdTAwMUZcbi8vIElORk9STUFUSU9OIFNFUEFSQVRPUiBPTkUsIGluY2x1c2l2ZTpcbi8vIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNjMC1jb250cm9sLW9yLXNwYWNlXG5cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cblxuXG52YXIgaXNKYXZhU2NyaXB0UHJvdG9jb2wgPSAvXltcXHUwMDAwLVxcdTAwMUYgXSpqW1xcclxcblxcdF0qYVtcXHJcXG5cXHRdKnZbXFxyXFxuXFx0XSphW1xcclxcblxcdF0qc1tcXHJcXG5cXHRdKmNbXFxyXFxuXFx0XSpyW1xcclxcblxcdF0qaVtcXHJcXG5cXHRdKnBbXFxyXFxuXFx0XSp0W1xcclxcblxcdF0qXFw6L2k7XG52YXIgZGlkV2FybiA9IGZhbHNlO1xuXG5mdW5jdGlvbiBzYW5pdGl6ZVVSTCh1cmwpIHtcbiAge1xuICAgIGlmICghZGlkV2FybiAmJiBpc0phdmFTY3JpcHRQcm90b2NvbC50ZXN0KHVybCkpIHtcbiAgICAgIGRpZFdhcm4gPSB0cnVlO1xuXG4gICAgICBlcnJvcignQSBmdXR1cmUgdmVyc2lvbiBvZiBSZWFjdCB3aWxsIGJsb2NrIGphdmFzY3JpcHQ6IFVSTHMgYXMgYSBzZWN1cml0eSBwcmVjYXV0aW9uLiAnICsgJ1VzZSBldmVudCBoYW5kbGVycyBpbnN0ZWFkIGlmIHlvdSBjYW4uIElmIHlvdSBuZWVkIHRvIGdlbmVyYXRlIHVuc2FmZSBIVE1MIHRyeSAnICsgJ3VzaW5nIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIGluc3RlYWQuIFJlYWN0IHdhcyBwYXNzZWQgJXMuJywgSlNPTi5zdHJpbmdpZnkodXJsKSk7XG4gICAgfVxuICB9XG59XG5cbi8vIGNvZGUgY29waWVkIGFuZCBtb2RpZmllZCBmcm9tIGVzY2FwZS1odG1sXG5cbi8qKlxuICogTW9kdWxlIHZhcmlhYmxlcy5cbiAqIEBwcml2YXRlXG4gKi9cbnZhciBtYXRjaEh0bWxSZWdFeHAgPSAvW1wiJyY8Pl0vO1xuLyoqXG4gKiBFc2NhcGVzIHNwZWNpYWwgY2hhcmFjdGVycyBhbmQgSFRNTCBlbnRpdGllcyBpbiBhIGdpdmVuIGh0bWwgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyaW5nIEhUTUwgc3RyaW5nIHRvIGVzY2FwZSBmb3IgbGF0ZXIgaW5zZXJ0aW9uXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZXNjYXBlSHRtbChzdHJpbmcpIHtcbiAgdmFyIHN0ciA9ICcnICsgc3RyaW5nO1xuICB2YXIgbWF0Y2ggPSBtYXRjaEh0bWxSZWdFeHAuZXhlYyhzdHIpO1xuXG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgdmFyIGVzY2FwZTtcbiAgdmFyIGh0bWwgPSAnJztcbiAgdmFyIGluZGV4O1xuICB2YXIgbGFzdEluZGV4ID0gMDtcblxuICBmb3IgKGluZGV4ID0gbWF0Y2guaW5kZXg7IGluZGV4IDwgc3RyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIHN3aXRjaCAoc3RyLmNoYXJDb2RlQXQoaW5kZXgpKSB7XG4gICAgICBjYXNlIDM0OlxuICAgICAgICAvLyBcIlxuICAgICAgICBlc2NhcGUgPSAnJnF1b3Q7JztcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMzg6XG4gICAgICAgIC8vICZcbiAgICAgICAgZXNjYXBlID0gJyZhbXA7JztcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMzk6XG4gICAgICAgIC8vICdcbiAgICAgICAgZXNjYXBlID0gJyYjeDI3Oyc7IC8vIG1vZGlmaWVkIGZyb20gZXNjYXBlLWh0bWw7IHVzZWQgdG8gYmUgJyYjMzknXG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgNjA6XG4gICAgICAgIC8vIDxcbiAgICAgICAgZXNjYXBlID0gJyZsdDsnO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA2MjpcbiAgICAgICAgLy8gPlxuICAgICAgICBlc2NhcGUgPSAnJmd0Oyc7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAobGFzdEluZGV4ICE9PSBpbmRleCkge1xuICAgICAgaHRtbCArPSBzdHIuc3Vic3RyaW5nKGxhc3RJbmRleCwgaW5kZXgpO1xuICAgIH1cblxuICAgIGxhc3RJbmRleCA9IGluZGV4ICsgMTtcbiAgICBodG1sICs9IGVzY2FwZTtcbiAgfVxuXG4gIHJldHVybiBsYXN0SW5kZXggIT09IGluZGV4ID8gaHRtbCArIHN0ci5zdWJzdHJpbmcobGFzdEluZGV4LCBpbmRleCkgOiBodG1sO1xufSAvLyBlbmQgY29kZSBjb3BpZWQgYW5kIG1vZGlmaWVkIGZyb20gZXNjYXBlLWh0bWxcblxuLyoqXG4gKiBFc2NhcGVzIHRleHQgdG8gcHJldmVudCBzY3JpcHRpbmcgYXR0YWNrcy5cbiAqXG4gKiBAcGFyYW0geyp9IHRleHQgVGV4dCB2YWx1ZSB0byBlc2NhcGUuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEFuIGVzY2FwZWQgc3RyaW5nLlxuICovXG5cblxuZnVuY3Rpb24gZXNjYXBlVGV4dEZvckJyb3dzZXIodGV4dCkge1xuICBpZiAodHlwZW9mIHRleHQgPT09ICdib29sZWFuJyB8fCB0eXBlb2YgdGV4dCA9PT0gJ251bWJlcicpIHtcbiAgICAvLyB0aGlzIHNob3J0Y2lyY3VpdCBoZWxwcyBwZXJmIGZvciB0eXBlcyB0aGF0IHdlIGtub3cgd2lsbCBuZXZlciBoYXZlXG4gICAgLy8gc3BlY2lhbCBjaGFyYWN0ZXJzLCBlc3BlY2lhbGx5IGdpdmVuIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyB1c2VkIG9mdGVuXG4gICAgLy8gZm9yIG51bWVyaWMgZG9tIGlkcy5cbiAgICByZXR1cm4gJycgKyB0ZXh0O1xuICB9XG5cbiAgcmV0dXJuIGVzY2FwZUh0bWwodGV4dCk7XG59XG5cbi8qKlxuICogRXNjYXBlcyBhdHRyaWJ1dGUgdmFsdWUgdG8gcHJldmVudCBzY3JpcHRpbmcgYXR0YWNrcy5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIFZhbHVlIHRvIGVzY2FwZS5cbiAqIEByZXR1cm4ge3N0cmluZ30gQW4gZXNjYXBlZCBzdHJpbmcuXG4gKi9cblxuZnVuY3Rpb24gcXVvdGVBdHRyaWJ1dGVWYWx1ZUZvckJyb3dzZXIodmFsdWUpIHtcbiAgcmV0dXJuICdcIicgKyBlc2NhcGVUZXh0Rm9yQnJvd3Nlcih2YWx1ZSkgKyAnXCInO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYXJrdXBGb3JSb290KCkge1xuICByZXR1cm4gUk9PVF9BVFRSSUJVVEVfTkFNRSArICc9XCJcIic7XG59XG4vKipcbiAqIENyZWF0ZXMgbWFya3VwIGZvciBhIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcmV0dXJuIHs/c3RyaW5nfSBNYXJrdXAgc3RyaW5nLCBvciBudWxsIGlmIHRoZSBwcm9wZXJ0eSB3YXMgaW52YWxpZC5cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVNYXJrdXBGb3JQcm9wZXJ0eShuYW1lLCB2YWx1ZSkge1xuICB2YXIgcHJvcGVydHlJbmZvID0gZ2V0UHJvcGVydHlJbmZvKG5hbWUpO1xuXG4gIGlmIChuYW1lICE9PSAnc3R5bGUnICYmIHNob3VsZElnbm9yZUF0dHJpYnV0ZShuYW1lLCBwcm9wZXJ0eUluZm8sIGZhbHNlKSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmIChzaG91bGRSZW1vdmVBdHRyaWJ1dGUobmFtZSwgdmFsdWUsIHByb3BlcnR5SW5mbywgZmFsc2UpKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHByb3BlcnR5SW5mbyAhPT0gbnVsbCkge1xuICAgIHZhciBhdHRyaWJ1dGVOYW1lID0gcHJvcGVydHlJbmZvLmF0dHJpYnV0ZU5hbWU7XG4gICAgdmFyIHR5cGUgPSBwcm9wZXJ0eUluZm8udHlwZTtcblxuICAgIGlmICh0eXBlID09PSBCT09MRUFOIHx8IHR5cGUgPT09IE9WRVJMT0FERURfQk9PTEVBTiAmJiB2YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWUgKyAnPVwiXCInO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocHJvcGVydHlJbmZvLnNhbml0aXplVVJMKSB7XG4gICAgICAgIHZhbHVlID0gJycgKyB2YWx1ZTtcbiAgICAgICAgc2FuaXRpemVVUkwodmFsdWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXR0cmlidXRlTmFtZSArICc9JyArIHF1b3RlQXR0cmlidXRlVmFsdWVGb3JCcm93c2VyKHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNBdHRyaWJ1dGVOYW1lU2FmZShuYW1lKSkge1xuICAgIHJldHVybiBuYW1lICsgJz0nICsgcXVvdGVBdHRyaWJ1dGVWYWx1ZUZvckJyb3dzZXIodmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuLyoqXG4gKiBDcmVhdGVzIG1hcmt1cCBmb3IgYSBjdXN0b20gcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm4ge3N0cmluZ30gTWFya3VwIHN0cmluZywgb3IgZW1wdHkgc3RyaW5nIGlmIHRoZSBwcm9wZXJ0eSB3YXMgaW52YWxpZC5cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVNYXJrdXBGb3JDdXN0b21BdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHtcbiAgaWYgKCFpc0F0dHJpYnV0ZU5hbWVTYWZlKG5hbWUpIHx8IHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICByZXR1cm4gbmFtZSArICc9JyArIHF1b3RlQXR0cmlidXRlVmFsdWVGb3JCcm93c2VyKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAqL1xuZnVuY3Rpb24gaXMoeCwgeSkge1xuICByZXR1cm4geCA9PT0geSAmJiAoeCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkpIHx8IHggIT09IHggJiYgeSAhPT0geSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxuICA7XG59XG5cbnZhciBvYmplY3RJcyA9IHR5cGVvZiBPYmplY3QuaXMgPT09ICdmdW5jdGlvbicgPyBPYmplY3QuaXMgOiBpcztcblxudmFyIGN1cnJlbnRseVJlbmRlcmluZ0NvbXBvbmVudCA9IG51bGw7XG52YXIgZmlyc3RXb3JrSW5Qcm9ncmVzc0hvb2sgPSBudWxsO1xudmFyIHdvcmtJblByb2dyZXNzSG9vayA9IG51bGw7IC8vIFdoZXRoZXIgdGhlIHdvcmstaW4tcHJvZ3Jlc3MgaG9vayBpcyBhIHJlLXJlbmRlcmVkIGhvb2tcblxudmFyIGlzUmVSZW5kZXIgPSBmYWxzZTsgLy8gV2hldGhlciBhbiB1cGRhdGUgd2FzIHNjaGVkdWxlZCBkdXJpbmcgdGhlIGN1cnJlbnRseSBleGVjdXRpbmcgcmVuZGVyIHBhc3MuXG5cbnZhciBkaWRTY2hlZHVsZVJlbmRlclBoYXNlVXBkYXRlID0gZmFsc2U7IC8vIExhemlseSBjcmVhdGVkIG1hcCBvZiByZW5kZXItcGhhc2UgdXBkYXRlc1xuXG52YXIgcmVuZGVyUGhhc2VVcGRhdGVzID0gbnVsbDsgLy8gQ291bnRlciB0byBwcmV2ZW50IGluZmluaXRlIGxvb3BzLlxuXG52YXIgbnVtYmVyT2ZSZVJlbmRlcnMgPSAwO1xudmFyIFJFX1JFTkRFUl9MSU1JVCA9IDI1O1xudmFyIGlzSW5Ib29rVXNlckNvZGVJbkRldiA9IGZhbHNlOyAvLyBJbiBERVYsIHRoaXMgaXMgdGhlIG5hbWUgb2YgdGhlIGN1cnJlbnRseSBleGVjdXRpbmcgcHJpbWl0aXZlIGhvb2tcblxudmFyIGN1cnJlbnRIb29rTmFtZUluRGV2O1xuXG5mdW5jdGlvbiByZXNvbHZlQ3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50KCkge1xuICBpZiAoIShjdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQgIT09IG51bGwpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiSW52YWxpZCBob29rIGNhbGwuIEhvb2tzIGNhbiBvbmx5IGJlIGNhbGxlZCBpbnNpZGUgb2YgdGhlIGJvZHkgb2YgYSBmdW5jdGlvbiBjb21wb25lbnQuIFRoaXMgY291bGQgaGFwcGVuIGZvciBvbmUgb2YgdGhlIGZvbGxvd2luZyByZWFzb25zOlxcbjEuIFlvdSBtaWdodCBoYXZlIG1pc21hdGNoaW5nIHZlcnNpb25zIG9mIFJlYWN0IGFuZCB0aGUgcmVuZGVyZXIgKHN1Y2ggYXMgUmVhY3QgRE9NKVxcbjIuIFlvdSBtaWdodCBiZSBicmVha2luZyB0aGUgUnVsZXMgb2YgSG9va3NcXG4zLiBZb3UgbWlnaHQgaGF2ZSBtb3JlIHRoYW4gb25lIGNvcHkgb2YgUmVhY3QgaW4gdGhlIHNhbWUgYXBwXFxuU2VlIGh0dHBzOi8vZmIubWUvcmVhY3QtaW52YWxpZC1ob29rLWNhbGwgZm9yIHRpcHMgYWJvdXQgaG93IHRvIGRlYnVnIGFuZCBmaXggdGhpcyBwcm9ibGVtLlwiICk7XG4gICAgfVxuICB9XG5cbiAge1xuICAgIGlmIChpc0luSG9va1VzZXJDb2RlSW5EZXYpIHtcbiAgICAgIGVycm9yKCdEbyBub3QgY2FsbCBIb29rcyBpbnNpZGUgdXNlRWZmZWN0KC4uLiksIHVzZU1lbW8oLi4uKSwgb3Igb3RoZXIgYnVpbHQtaW4gSG9va3MuICcgKyAnWW91IGNhbiBvbmx5IGNhbGwgSG9va3MgYXQgdGhlIHRvcCBsZXZlbCBvZiB5b3VyIFJlYWN0IGZ1bmN0aW9uLiAnICsgJ0ZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgJyArICdodHRwczovL2ZiLm1lL3J1bGVzLW9mLWhvb2tzJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGN1cnJlbnRseVJlbmRlcmluZ0NvbXBvbmVudDtcbn1cblxuZnVuY3Rpb24gYXJlSG9va0lucHV0c0VxdWFsKG5leHREZXBzLCBwcmV2RGVwcykge1xuICBpZiAocHJldkRlcHMgPT09IG51bGwpIHtcbiAgICB7XG4gICAgICBlcnJvcignJXMgcmVjZWl2ZWQgYSBmaW5hbCBhcmd1bWVudCBkdXJpbmcgdGhpcyByZW5kZXIsIGJ1dCBub3QgZHVyaW5nICcgKyAndGhlIHByZXZpb3VzIHJlbmRlci4gRXZlbiB0aG91Z2ggdGhlIGZpbmFsIGFyZ3VtZW50IGlzIG9wdGlvbmFsLCAnICsgJ2l0cyB0eXBlIGNhbm5vdCBjaGFuZ2UgYmV0d2VlbiByZW5kZXJzLicsIGN1cnJlbnRIb29rTmFtZUluRGV2KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB7XG4gICAgLy8gRG9uJ3QgYm90aGVyIGNvbXBhcmluZyBsZW5ndGhzIGluIHByb2QgYmVjYXVzZSB0aGVzZSBhcnJheXMgc2hvdWxkIGJlXG4gICAgLy8gcGFzc2VkIGlubGluZS5cbiAgICBpZiAobmV4dERlcHMubGVuZ3RoICE9PSBwcmV2RGVwcy5sZW5ndGgpIHtcbiAgICAgIGVycm9yKCdUaGUgZmluYWwgYXJndW1lbnQgcGFzc2VkIHRvICVzIGNoYW5nZWQgc2l6ZSBiZXR3ZWVuIHJlbmRlcnMuIFRoZSAnICsgJ29yZGVyIGFuZCBzaXplIG9mIHRoaXMgYXJyYXkgbXVzdCByZW1haW4gY29uc3RhbnQuXFxuXFxuJyArICdQcmV2aW91czogJXNcXG4nICsgJ0luY29taW5nOiAlcycsIGN1cnJlbnRIb29rTmFtZUluRGV2LCBcIltcIiArIG5leHREZXBzLmpvaW4oJywgJykgKyBcIl1cIiwgXCJbXCIgKyBwcmV2RGVwcy5qb2luKCcsICcpICsgXCJdXCIpO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJldkRlcHMubGVuZ3RoICYmIGkgPCBuZXh0RGVwcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChvYmplY3RJcyhuZXh0RGVwc1tpXSwgcHJldkRlcHNbaV0pKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG9vaygpIHtcbiAgaWYgKG51bWJlck9mUmVSZW5kZXJzID4gMCkge1xuICAgIHtcbiAgICAgIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoIFwiUmVuZGVyZWQgbW9yZSBob29rcyB0aGFuIGR1cmluZyB0aGUgcHJldmlvdXMgcmVuZGVyXCIgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1lbW9pemVkU3RhdGU6IG51bGwsXG4gICAgcXVldWU6IG51bGwsXG4gICAgbmV4dDogbnVsbFxuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVXb3JrSW5Qcm9ncmVzc0hvb2soKSB7XG4gIGlmICh3b3JrSW5Qcm9ncmVzc0hvb2sgPT09IG51bGwpIHtcbiAgICAvLyBUaGlzIGlzIHRoZSBmaXJzdCBob29rIGluIHRoZSBsaXN0XG4gICAgaWYgKGZpcnN0V29ya0luUHJvZ3Jlc3NIb29rID09PSBudWxsKSB7XG4gICAgICBpc1JlUmVuZGVyID0gZmFsc2U7XG4gICAgICBmaXJzdFdvcmtJblByb2dyZXNzSG9vayA9IHdvcmtJblByb2dyZXNzSG9vayA9IGNyZWF0ZUhvb2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhlcmUncyBhbHJlYWR5IGEgd29yay1pbi1wcm9ncmVzcy4gUmV1c2UgaXQuXG4gICAgICBpc1JlUmVuZGVyID0gdHJ1ZTtcbiAgICAgIHdvcmtJblByb2dyZXNzSG9vayA9IGZpcnN0V29ya0luUHJvZ3Jlc3NIb29rO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAod29ya0luUHJvZ3Jlc3NIb29rLm5leHQgPT09IG51bGwpIHtcbiAgICAgIGlzUmVSZW5kZXIgPSBmYWxzZTsgLy8gQXBwZW5kIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3RcblxuICAgICAgd29ya0luUHJvZ3Jlc3NIb29rID0gd29ya0luUHJvZ3Jlc3NIb29rLm5leHQgPSBjcmVhdGVIb29rKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZXJlJ3MgYWxyZWFkeSBhIHdvcmstaW4tcHJvZ3Jlc3MuIFJldXNlIGl0LlxuICAgICAgaXNSZVJlbmRlciA9IHRydWU7XG4gICAgICB3b3JrSW5Qcm9ncmVzc0hvb2sgPSB3b3JrSW5Qcm9ncmVzc0hvb2submV4dDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gd29ya0luUHJvZ3Jlc3NIb29rO1xufVxuXG5mdW5jdGlvbiBwcmVwYXJlVG9Vc2VIb29rcyhjb21wb25lbnRJZGVudGl0eSkge1xuICBjdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQgPSBjb21wb25lbnRJZGVudGl0eTtcblxuICB7XG4gICAgaXNJbkhvb2tVc2VyQ29kZUluRGV2ID0gZmFsc2U7XG4gIH0gLy8gVGhlIGZvbGxvd2luZyBzaG91bGQgaGF2ZSBhbHJlYWR5IGJlZW4gcmVzZXRcbiAgLy8gZGlkU2NoZWR1bGVSZW5kZXJQaGFzZVVwZGF0ZSA9IGZhbHNlO1xuICAvLyBmaXJzdFdvcmtJblByb2dyZXNzSG9vayA9IG51bGw7XG4gIC8vIG51bWJlck9mUmVSZW5kZXJzID0gMDtcbiAgLy8gcmVuZGVyUGhhc2VVcGRhdGVzID0gbnVsbDtcbiAgLy8gd29ya0luUHJvZ3Jlc3NIb29rID0gbnVsbDtcblxufVxuZnVuY3Rpb24gZmluaXNoSG9va3MoQ29tcG9uZW50LCBwcm9wcywgY2hpbGRyZW4sIHJlZk9yQ29udGV4dCkge1xuICAvLyBUaGlzIG11c3QgYmUgY2FsbGVkIGFmdGVyIGV2ZXJ5IGZ1bmN0aW9uIGNvbXBvbmVudCB0byBwcmV2ZW50IGhvb2tzIGZyb21cbiAgLy8gYmVpbmcgdXNlZCBpbiBjbGFzc2VzLlxuICB3aGlsZSAoZGlkU2NoZWR1bGVSZW5kZXJQaGFzZVVwZGF0ZSkge1xuICAgIC8vIFVwZGF0ZXMgd2VyZSBzY2hlZHVsZWQgZHVyaW5nIHRoZSByZW5kZXIgcGhhc2UuIFRoZXkgYXJlIHN0b3JlZCBpblxuICAgIC8vIHRoZSBgcmVuZGVyUGhhc2VVcGRhdGVzYCBtYXAuIENhbGwgdGhlIGNvbXBvbmVudCBhZ2FpbiwgcmV1c2luZyB0aGVcbiAgICAvLyB3b3JrLWluLXByb2dyZXNzIGhvb2tzIGFuZCBhcHBseWluZyB0aGUgYWRkaXRpb25hbCB1cGRhdGVzIG9uIHRvcC4gS2VlcFxuICAgIC8vIHJlc3RhcnRpbmcgdW50aWwgbm8gbW9yZSB1cGRhdGVzIGFyZSBzY2hlZHVsZWQuXG4gICAgZGlkU2NoZWR1bGVSZW5kZXJQaGFzZVVwZGF0ZSA9IGZhbHNlO1xuICAgIG51bWJlck9mUmVSZW5kZXJzICs9IDE7IC8vIFN0YXJ0IG92ZXIgZnJvbSB0aGUgYmVnaW5uaW5nIG9mIHRoZSBsaXN0XG5cbiAgICB3b3JrSW5Qcm9ncmVzc0hvb2sgPSBudWxsO1xuICAgIGNoaWxkcmVuID0gQ29tcG9uZW50KHByb3BzLCByZWZPckNvbnRleHQpO1xuICB9XG5cbiAgY3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50ID0gbnVsbDtcbiAgZmlyc3RXb3JrSW5Qcm9ncmVzc0hvb2sgPSBudWxsO1xuICBudW1iZXJPZlJlUmVuZGVycyA9IDA7XG4gIHJlbmRlclBoYXNlVXBkYXRlcyA9IG51bGw7XG4gIHdvcmtJblByb2dyZXNzSG9vayA9IG51bGw7XG5cbiAge1xuICAgIGlzSW5Ib29rVXNlckNvZGVJbkRldiA9IGZhbHNlO1xuICB9IC8vIFRoZXNlIHdlcmUgcmVzZXQgYWJvdmVcbiAgLy8gY3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50ID0gbnVsbDtcbiAgLy8gZGlkU2NoZWR1bGVSZW5kZXJQaGFzZVVwZGF0ZSA9IGZhbHNlO1xuICAvLyBmaXJzdFdvcmtJblByb2dyZXNzSG9vayA9IG51bGw7XG4gIC8vIG51bWJlck9mUmVSZW5kZXJzID0gMDtcbiAgLy8gcmVuZGVyUGhhc2VVcGRhdGVzID0gbnVsbDtcbiAgLy8gd29ya0luUHJvZ3Jlc3NIb29rID0gbnVsbDtcblxuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gcmVhZENvbnRleHQoY29udGV4dCwgb2JzZXJ2ZWRCaXRzKSB7XG4gIHZhciB0aHJlYWRJRCA9IGN1cnJlbnRUaHJlYWRJRDtcbiAgdmFsaWRhdGVDb250ZXh0Qm91bmRzKGNvbnRleHQsIHRocmVhZElEKTtcblxuICB7XG4gICAgaWYgKGlzSW5Ib29rVXNlckNvZGVJbkRldikge1xuICAgICAgZXJyb3IoJ0NvbnRleHQgY2FuIG9ubHkgYmUgcmVhZCB3aGlsZSBSZWFjdCBpcyByZW5kZXJpbmcuICcgKyAnSW4gY2xhc3NlcywgeW91IGNhbiByZWFkIGl0IGluIHRoZSByZW5kZXIgbWV0aG9kIG9yIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcy4gJyArICdJbiBmdW5jdGlvbiBjb21wb25lbnRzLCB5b3UgY2FuIHJlYWQgaXQgZGlyZWN0bHkgaW4gdGhlIGZ1bmN0aW9uIGJvZHksIGJ1dCBub3QgJyArICdpbnNpZGUgSG9va3MgbGlrZSB1c2VSZWR1Y2VyKCkgb3IgdXNlTWVtbygpLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb250ZXh0W3RocmVhZElEXTtcbn1cblxuZnVuY3Rpb24gdXNlQ29udGV4dChjb250ZXh0LCBvYnNlcnZlZEJpdHMpIHtcbiAge1xuICAgIGN1cnJlbnRIb29rTmFtZUluRGV2ID0gJ3VzZUNvbnRleHQnO1xuICB9XG5cbiAgcmVzb2x2ZUN1cnJlbnRseVJlbmRlcmluZ0NvbXBvbmVudCgpO1xuICB2YXIgdGhyZWFkSUQgPSBjdXJyZW50VGhyZWFkSUQ7XG4gIHZhbGlkYXRlQ29udGV4dEJvdW5kcyhjb250ZXh0LCB0aHJlYWRJRCk7XG4gIHJldHVybiBjb250ZXh0W3RocmVhZElEXTtcbn1cblxuZnVuY3Rpb24gYmFzaWNTdGF0ZVJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICAvLyAkRmxvd0ZpeE1lOiBGbG93IGRvZXNuJ3QgbGlrZSBtaXhlZCB0eXBlc1xuICByZXR1cm4gdHlwZW9mIGFjdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IGFjdGlvbihzdGF0ZSkgOiBhY3Rpb247XG59XG5cbmZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICB7XG4gICAgY3VycmVudEhvb2tOYW1lSW5EZXYgPSAndXNlU3RhdGUnO1xuICB9XG5cbiAgcmV0dXJuIHVzZVJlZHVjZXIoYmFzaWNTdGF0ZVJlZHVjZXIsIC8vIHVzZVJlZHVjZXIgaGFzIGEgc3BlY2lhbCBjYXNlIHRvIHN1cHBvcnQgbGF6eSB1c2VTdGF0ZSBpbml0aWFsaXplcnNcbiAgaW5pdGlhbFN0YXRlKTtcbn1cbmZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCkge1xuICB7XG4gICAgaWYgKHJlZHVjZXIgIT09IGJhc2ljU3RhdGVSZWR1Y2VyKSB7XG4gICAgICBjdXJyZW50SG9va05hbWVJbkRldiA9ICd1c2VSZWR1Y2VyJztcbiAgICB9XG4gIH1cblxuICBjdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQgPSByZXNvbHZlQ3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50KCk7XG4gIHdvcmtJblByb2dyZXNzSG9vayA9IGNyZWF0ZVdvcmtJblByb2dyZXNzSG9vaygpO1xuXG4gIGlmIChpc1JlUmVuZGVyKSB7XG4gICAgLy8gVGhpcyBpcyBhIHJlLXJlbmRlci4gQXBwbHkgdGhlIG5ldyByZW5kZXIgcGhhc2UgdXBkYXRlcyB0byB0aGUgcHJldmlvdXNcbiAgICAvLyBjdXJyZW50IGhvb2suXG4gICAgdmFyIHF1ZXVlID0gd29ya0luUHJvZ3Jlc3NIb29rLnF1ZXVlO1xuICAgIHZhciBkaXNwYXRjaCA9IHF1ZXVlLmRpc3BhdGNoO1xuXG4gICAgaWYgKHJlbmRlclBoYXNlVXBkYXRlcyAhPT0gbnVsbCkge1xuICAgICAgLy8gUmVuZGVyIHBoYXNlIHVwZGF0ZXMgYXJlIHN0b3JlZCBpbiBhIG1hcCBvZiBxdWV1ZSAtPiBsaW5rZWQgbGlzdFxuICAgICAgdmFyIGZpcnN0UmVuZGVyUGhhc2VVcGRhdGUgPSByZW5kZXJQaGFzZVVwZGF0ZXMuZ2V0KHF1ZXVlKTtcblxuICAgICAgaWYgKGZpcnN0UmVuZGVyUGhhc2VVcGRhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZW5kZXJQaGFzZVVwZGF0ZXMuZGVsZXRlKHF1ZXVlKTtcbiAgICAgICAgdmFyIG5ld1N0YXRlID0gd29ya0luUHJvZ3Jlc3NIb29rLm1lbW9pemVkU3RhdGU7XG4gICAgICAgIHZhciB1cGRhdGUgPSBmaXJzdFJlbmRlclBoYXNlVXBkYXRlO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAvLyBQcm9jZXNzIHRoaXMgcmVuZGVyIHBoYXNlIHVwZGF0ZS4gV2UgZG9uJ3QgaGF2ZSB0byBjaGVjayB0aGVcbiAgICAgICAgICAvLyBwcmlvcml0eSBiZWNhdXNlIGl0IHdpbGwgYWx3YXlzIGJlIHRoZSBzYW1lIGFzIHRoZSBjdXJyZW50XG4gICAgICAgICAgLy8gcmVuZGVyJ3MuXG4gICAgICAgICAgdmFyIGFjdGlvbiA9IHVwZGF0ZS5hY3Rpb247XG5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBpc0luSG9va1VzZXJDb2RlSW5EZXYgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG5ld1N0YXRlID0gcmVkdWNlcihuZXdTdGF0ZSwgYWN0aW9uKTtcblxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlzSW5Ib29rVXNlckNvZGVJbkRldiA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVwZGF0ZSA9IHVwZGF0ZS5uZXh0O1xuICAgICAgICB9IHdoaWxlICh1cGRhdGUgIT09IG51bGwpO1xuXG4gICAgICAgIHdvcmtJblByb2dyZXNzSG9vay5tZW1vaXplZFN0YXRlID0gbmV3U3RhdGU7XG4gICAgICAgIHJldHVybiBbbmV3U3RhdGUsIGRpc3BhdGNoXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gW3dvcmtJblByb2dyZXNzSG9vay5tZW1vaXplZFN0YXRlLCBkaXNwYXRjaF07XG4gIH0gZWxzZSB7XG4gICAge1xuICAgICAgaXNJbkhvb2tVc2VyQ29kZUluRGV2ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgaW5pdGlhbFN0YXRlO1xuXG4gICAgaWYgKHJlZHVjZXIgPT09IGJhc2ljU3RhdGVSZWR1Y2VyKSB7XG4gICAgICAvLyBTcGVjaWFsIGNhc2UgZm9yIGB1c2VTdGF0ZWAuXG4gICAgICBpbml0aWFsU3RhdGUgPSB0eXBlb2YgaW5pdGlhbEFyZyA9PT0gJ2Z1bmN0aW9uJyA/IGluaXRpYWxBcmcoKSA6IGluaXRpYWxBcmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluaXRpYWxTdGF0ZSA9IGluaXQgIT09IHVuZGVmaW5lZCA/IGluaXQoaW5pdGlhbEFyZykgOiBpbml0aWFsQXJnO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGlzSW5Ib29rVXNlckNvZGVJbkRldiA9IGZhbHNlO1xuICAgIH1cblxuICAgIHdvcmtJblByb2dyZXNzSG9vay5tZW1vaXplZFN0YXRlID0gaW5pdGlhbFN0YXRlO1xuXG4gICAgdmFyIF9xdWV1ZSA9IHdvcmtJblByb2dyZXNzSG9vay5xdWV1ZSA9IHtcbiAgICAgIGxhc3Q6IG51bGwsXG4gICAgICBkaXNwYXRjaDogbnVsbFxuICAgIH07XG5cbiAgICB2YXIgX2Rpc3BhdGNoID0gX3F1ZXVlLmRpc3BhdGNoID0gZGlzcGF0Y2hBY3Rpb24uYmluZChudWxsLCBjdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQsIF9xdWV1ZSk7XG5cbiAgICByZXR1cm4gW3dvcmtJblByb2dyZXNzSG9vay5tZW1vaXplZFN0YXRlLCBfZGlzcGF0Y2hdO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVzZU1lbW8obmV4dENyZWF0ZSwgZGVwcykge1xuICBjdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQgPSByZXNvbHZlQ3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50KCk7XG4gIHdvcmtJblByb2dyZXNzSG9vayA9IGNyZWF0ZVdvcmtJblByb2dyZXNzSG9vaygpO1xuICB2YXIgbmV4dERlcHMgPSBkZXBzID09PSB1bmRlZmluZWQgPyBudWxsIDogZGVwcztcblxuICBpZiAod29ya0luUHJvZ3Jlc3NIb29rICE9PSBudWxsKSB7XG4gICAgdmFyIHByZXZTdGF0ZSA9IHdvcmtJblByb2dyZXNzSG9vay5tZW1vaXplZFN0YXRlO1xuXG4gICAgaWYgKHByZXZTdGF0ZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKG5leHREZXBzICE9PSBudWxsKSB7XG4gICAgICAgIHZhciBwcmV2RGVwcyA9IHByZXZTdGF0ZVsxXTtcblxuICAgICAgICBpZiAoYXJlSG9va0lucHV0c0VxdWFsKG5leHREZXBzLCBwcmV2RGVwcykpIHtcbiAgICAgICAgICByZXR1cm4gcHJldlN0YXRlWzBdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAge1xuICAgIGlzSW5Ib29rVXNlckNvZGVJbkRldiA9IHRydWU7XG4gIH1cblxuICB2YXIgbmV4dFZhbHVlID0gbmV4dENyZWF0ZSgpO1xuXG4gIHtcbiAgICBpc0luSG9va1VzZXJDb2RlSW5EZXYgPSBmYWxzZTtcbiAgfVxuXG4gIHdvcmtJblByb2dyZXNzSG9vay5tZW1vaXplZFN0YXRlID0gW25leHRWYWx1ZSwgbmV4dERlcHNdO1xuICByZXR1cm4gbmV4dFZhbHVlO1xufVxuXG5mdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG4gIGN1cnJlbnRseVJlbmRlcmluZ0NvbXBvbmVudCA9IHJlc29sdmVDdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQoKTtcbiAgd29ya0luUHJvZ3Jlc3NIb29rID0gY3JlYXRlV29ya0luUHJvZ3Jlc3NIb29rKCk7XG4gIHZhciBwcmV2aW91c1JlZiA9IHdvcmtJblByb2dyZXNzSG9vay5tZW1vaXplZFN0YXRlO1xuXG4gIGlmIChwcmV2aW91c1JlZiA9PT0gbnVsbCkge1xuICAgIHZhciByZWYgPSB7XG4gICAgICBjdXJyZW50OiBpbml0aWFsVmFsdWVcbiAgICB9O1xuXG4gICAge1xuICAgICAgT2JqZWN0LnNlYWwocmVmKTtcbiAgICB9XG5cbiAgICB3b3JrSW5Qcm9ncmVzc0hvb2subWVtb2l6ZWRTdGF0ZSA9IHJlZjtcbiAgICByZXR1cm4gcmVmO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBwcmV2aW91c1JlZjtcbiAgfVxufVxuXG5mdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBpbnB1dHMpIHtcbiAge1xuICAgIGN1cnJlbnRIb29rTmFtZUluRGV2ID0gJ3VzZUxheW91dEVmZmVjdCc7XG5cbiAgICBlcnJvcigndXNlTGF5b3V0RWZmZWN0IGRvZXMgbm90aGluZyBvbiB0aGUgc2VydmVyLCBiZWNhdXNlIGl0cyBlZmZlY3QgY2Fubm90ICcgKyBcImJlIGVuY29kZWQgaW50byB0aGUgc2VydmVyIHJlbmRlcmVyJ3Mgb3V0cHV0IGZvcm1hdC4gVGhpcyB3aWxsIGxlYWQgXCIgKyAndG8gYSBtaXNtYXRjaCBiZXR3ZWVuIHRoZSBpbml0aWFsLCBub24taHlkcmF0ZWQgVUkgYW5kIHRoZSBpbnRlbmRlZCAnICsgJ1VJLiBUbyBhdm9pZCB0aGlzLCB1c2VMYXlvdXRFZmZlY3Qgc2hvdWxkIG9ubHkgYmUgdXNlZCBpbiAnICsgJ2NvbXBvbmVudHMgdGhhdCByZW5kZXIgZXhjbHVzaXZlbHkgb24gdGhlIGNsaWVudC4gJyArICdTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC11c2VsYXlvdXRlZmZlY3Qtc3NyIGZvciBjb21tb24gZml4ZXMuJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGF0Y2hBY3Rpb24oY29tcG9uZW50SWRlbnRpdHksIHF1ZXVlLCBhY3Rpb24pIHtcbiAgaWYgKCEobnVtYmVyT2ZSZVJlbmRlcnMgPCBSRV9SRU5ERVJfTElNSVQpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiVG9vIG1hbnkgcmUtcmVuZGVycy4gUmVhY3QgbGltaXRzIHRoZSBudW1iZXIgb2YgcmVuZGVycyB0byBwcmV2ZW50IGFuIGluZmluaXRlIGxvb3AuXCIgKTtcbiAgICB9XG4gIH1cblxuICBpZiAoY29tcG9uZW50SWRlbnRpdHkgPT09IGN1cnJlbnRseVJlbmRlcmluZ0NvbXBvbmVudCkge1xuICAgIC8vIFRoaXMgaXMgYSByZW5kZXIgcGhhc2UgdXBkYXRlLiBTdGFzaCBpdCBpbiBhIGxhemlseS1jcmVhdGVkIG1hcCBvZlxuICAgIC8vIHF1ZXVlIC0+IGxpbmtlZCBsaXN0IG9mIHVwZGF0ZXMuIEFmdGVyIHRoaXMgcmVuZGVyIHBhc3MsIHdlJ2xsIHJlc3RhcnRcbiAgICAvLyBhbmQgYXBwbHkgdGhlIHN0YXNoZWQgdXBkYXRlcyBvbiB0b3Agb2YgdGhlIHdvcmstaW4tcHJvZ3Jlc3MgaG9vay5cbiAgICBkaWRTY2hlZHVsZVJlbmRlclBoYXNlVXBkYXRlID0gdHJ1ZTtcbiAgICB2YXIgdXBkYXRlID0ge1xuICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICBuZXh0OiBudWxsXG4gICAgfTtcblxuICAgIGlmIChyZW5kZXJQaGFzZVVwZGF0ZXMgPT09IG51bGwpIHtcbiAgICAgIHJlbmRlclBoYXNlVXBkYXRlcyA9IG5ldyBNYXAoKTtcbiAgICB9XG5cbiAgICB2YXIgZmlyc3RSZW5kZXJQaGFzZVVwZGF0ZSA9IHJlbmRlclBoYXNlVXBkYXRlcy5nZXQocXVldWUpO1xuXG4gICAgaWYgKGZpcnN0UmVuZGVyUGhhc2VVcGRhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVuZGVyUGhhc2VVcGRhdGVzLnNldChxdWV1ZSwgdXBkYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQXBwZW5kIHRoZSB1cGRhdGUgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdC5cbiAgICAgIHZhciBsYXN0UmVuZGVyUGhhc2VVcGRhdGUgPSBmaXJzdFJlbmRlclBoYXNlVXBkYXRlO1xuXG4gICAgICB3aGlsZSAobGFzdFJlbmRlclBoYXNlVXBkYXRlLm5leHQgIT09IG51bGwpIHtcbiAgICAgICAgbGFzdFJlbmRlclBoYXNlVXBkYXRlID0gbGFzdFJlbmRlclBoYXNlVXBkYXRlLm5leHQ7XG4gICAgICB9XG5cbiAgICAgIGxhc3RSZW5kZXJQaGFzZVVwZGF0ZS5uZXh0ID0gdXBkYXRlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB1c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcykge1xuICAvLyBDYWxsYmFja3MgYXJlIHBhc3NlZCBhcyB0aGV5IGFyZSBpbiB0aGUgc2VydmVyIGVudmlyb25tZW50LlxuICByZXR1cm4gY2FsbGJhY2s7XG59XG5cbmZ1bmN0aW9uIHVzZVJlc3BvbmRlcihyZXNwb25kZXIsIHByb3BzKSB7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHByb3BzLFxuICAgIHJlc3BvbmRlcjogcmVzcG9uZGVyXG4gIH07XG59XG5cbmZ1bmN0aW9uIHVzZURlZmVycmVkVmFsdWUodmFsdWUsIGNvbmZpZykge1xuICByZXNvbHZlQ3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50KCk7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gdXNlVHJhbnNpdGlvbihjb25maWcpIHtcbiAgcmVzb2x2ZUN1cnJlbnRseVJlbmRlcmluZ0NvbXBvbmVudCgpO1xuXG4gIHZhciBzdGFydFRyYW5zaXRpb24gPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjaygpO1xuICB9O1xuXG4gIHJldHVybiBbc3RhcnRUcmFuc2l0aW9uLCBmYWxzZV07XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG52YXIgY3VycmVudFRocmVhZElEID0gMDtcbmZ1bmN0aW9uIHNldEN1cnJlbnRUaHJlYWRJRCh0aHJlYWRJRCkge1xuICBjdXJyZW50VGhyZWFkSUQgPSB0aHJlYWRJRDtcbn1cbnZhciBEaXNwYXRjaGVyID0ge1xuICByZWFkQ29udGV4dDogcmVhZENvbnRleHQsXG4gIHVzZUNvbnRleHQ6IHVzZUNvbnRleHQsXG4gIHVzZU1lbW86IHVzZU1lbW8sXG4gIHVzZVJlZHVjZXI6IHVzZVJlZHVjZXIsXG4gIHVzZVJlZjogdXNlUmVmLFxuICB1c2VTdGF0ZTogdXNlU3RhdGUsXG4gIHVzZUxheW91dEVmZmVjdDogdXNlTGF5b3V0RWZmZWN0LFxuICB1c2VDYWxsYmFjazogdXNlQ2FsbGJhY2ssXG4gIC8vIHVzZUltcGVyYXRpdmVIYW5kbGUgaXMgbm90IHJ1biBpbiB0aGUgc2VydmVyIGVudmlyb25tZW50XG4gIHVzZUltcGVyYXRpdmVIYW5kbGU6IG5vb3AsXG4gIC8vIEVmZmVjdHMgYXJlIG5vdCBydW4gaW4gdGhlIHNlcnZlciBlbnZpcm9ubWVudC5cbiAgdXNlRWZmZWN0OiBub29wLFxuICAvLyBEZWJ1Z2dpbmcgZWZmZWN0XG4gIHVzZURlYnVnVmFsdWU6IG5vb3AsXG4gIHVzZVJlc3BvbmRlcjogdXNlUmVzcG9uZGVyLFxuICB1c2VEZWZlcnJlZFZhbHVlOiB1c2VEZWZlcnJlZFZhbHVlLFxuICB1c2VUcmFuc2l0aW9uOiB1c2VUcmFuc2l0aW9uXG59O1xuXG52YXIgSFRNTF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCc7XG52YXIgTUFUSF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTCc7XG52YXIgU1ZHX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG52YXIgTmFtZXNwYWNlcyA9IHtcbiAgaHRtbDogSFRNTF9OQU1FU1BBQ0UsXG4gIG1hdGhtbDogTUFUSF9OQU1FU1BBQ0UsXG4gIHN2ZzogU1ZHX05BTUVTUEFDRVxufTsgLy8gQXNzdW1lcyB0aGVyZSBpcyBubyBwYXJlbnQgbmFtZXNwYWNlLlxuXG5mdW5jdGlvbiBnZXRJbnRyaW5zaWNOYW1lc3BhY2UodHlwZSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdzdmcnOlxuICAgICAgcmV0dXJuIFNWR19OQU1FU1BBQ0U7XG5cbiAgICBjYXNlICdtYXRoJzpcbiAgICAgIHJldHVybiBNQVRIX05BTUVTUEFDRTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gSFRNTF9OQU1FU1BBQ0U7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldENoaWxkTmFtZXNwYWNlKHBhcmVudE5hbWVzcGFjZSwgdHlwZSkge1xuICBpZiAocGFyZW50TmFtZXNwYWNlID09IG51bGwgfHwgcGFyZW50TmFtZXNwYWNlID09PSBIVE1MX05BTUVTUEFDRSkge1xuICAgIC8vIE5vIChvciBkZWZhdWx0KSBwYXJlbnQgbmFtZXNwYWNlOiBwb3RlbnRpYWwgZW50cnkgcG9pbnQuXG4gICAgcmV0dXJuIGdldEludHJpbnNpY05hbWVzcGFjZSh0eXBlKTtcbiAgfVxuXG4gIGlmIChwYXJlbnROYW1lc3BhY2UgPT09IFNWR19OQU1FU1BBQ0UgJiYgdHlwZSA9PT0gJ2ZvcmVpZ25PYmplY3QnKSB7XG4gICAgLy8gV2UncmUgbGVhdmluZyBTVkcuXG4gICAgcmV0dXJuIEhUTUxfTkFNRVNQQUNFO1xuICB9IC8vIEJ5IGRlZmF1bHQsIHBhc3MgbmFtZXNwYWNlIGJlbG93LlxuXG5cbiAgcmV0dXJuIHBhcmVudE5hbWVzcGFjZTtcbn1cblxudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMiA9IG51bGw7XG52YXIgUmVhY3RDb250cm9sbGVkVmFsdWVQcm9wVHlwZXMgPSB7XG4gIGNoZWNrUHJvcFR5cGVzOiBudWxsXG59O1xuXG57XG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMiA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gIHZhciBoYXNSZWFkT25seVZhbHVlID0ge1xuICAgIGJ1dHRvbjogdHJ1ZSxcbiAgICBjaGVja2JveDogdHJ1ZSxcbiAgICBpbWFnZTogdHJ1ZSxcbiAgICBoaWRkZW46IHRydWUsXG4gICAgcmFkaW86IHRydWUsXG4gICAgcmVzZXQ6IHRydWUsXG4gICAgc3VibWl0OiB0cnVlXG4gIH07XG4gIHZhciBwcm9wVHlwZXMgPSB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uIChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICAgIGlmIChoYXNSZWFkT25seVZhbHVlW3Byb3BzLnR5cGVdIHx8IHByb3BzLm9uQ2hhbmdlIHx8IHByb3BzLnJlYWRPbmx5IHx8IHByb3BzLmRpc2FibGVkIHx8IHByb3BzW3Byb3BOYW1lXSA9PSBudWxsIHx8IGVuYWJsZURlcHJlY2F0ZWRGbGFyZUFQSSApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1lvdSBwcm92aWRlZCBhIGB2YWx1ZWAgcHJvcCB0byBhIGZvcm0gZmllbGQgd2l0aG91dCBhbiAnICsgJ2BvbkNoYW5nZWAgaGFuZGxlci4gVGhpcyB3aWxsIHJlbmRlciBhIHJlYWQtb25seSBmaWVsZC4gSWYgJyArICd0aGUgZmllbGQgc2hvdWxkIGJlIG11dGFibGUgdXNlIGBkZWZhdWx0VmFsdWVgLiBPdGhlcndpc2UsICcgKyAnc2V0IGVpdGhlciBgb25DaGFuZ2VgIG9yIGByZWFkT25seWAuJyk7XG4gICAgfSxcbiAgICBjaGVja2VkOiBmdW5jdGlvbiAocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAgICBpZiAocHJvcHMub25DaGFuZ2UgfHwgcHJvcHMucmVhZE9ubHkgfHwgcHJvcHMuZGlzYWJsZWQgfHwgcHJvcHNbcHJvcE5hbWVdID09IG51bGwgfHwgZW5hYmxlRGVwcmVjYXRlZEZsYXJlQVBJICkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBFcnJvcignWW91IHByb3ZpZGVkIGEgYGNoZWNrZWRgIHByb3AgdG8gYSBmb3JtIGZpZWxkIHdpdGhvdXQgYW4gJyArICdgb25DaGFuZ2VgIGhhbmRsZXIuIFRoaXMgd2lsbCByZW5kZXIgYSByZWFkLW9ubHkgZmllbGQuIElmICcgKyAndGhlIGZpZWxkIHNob3VsZCBiZSBtdXRhYmxlIHVzZSBgZGVmYXVsdENoZWNrZWRgLiBPdGhlcndpc2UsICcgKyAnc2V0IGVpdGhlciBgb25DaGFuZ2VgIG9yIGByZWFkT25seWAuJyk7XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogUHJvdmlkZSBhIGxpbmtlZCBgdmFsdWVgIGF0dHJpYnV0ZSBmb3IgY29udHJvbGxlZCBmb3Jtcy4gWW91IHNob3VsZCBub3QgdXNlXG4gICAqIHRoaXMgb3V0c2lkZSBvZiB0aGUgUmVhY3RET00gY29udHJvbGxlZCBmb3JtIGNvbXBvbmVudHMuXG4gICAqL1xuXG4gIFJlYWN0Q29udHJvbGxlZFZhbHVlUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gZnVuY3Rpb24gKHRhZ05hbWUsIHByb3BzKSB7XG4gICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBwcm9wcywgJ3Byb3AnLCB0YWdOYW1lLCBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDIuZ2V0U3RhY2tBZGRlbmR1bSk7XG4gIH07XG59XG5cbi8vIEZvciBIVE1MLCBjZXJ0YWluIHRhZ3Mgc2hvdWxkIG9taXQgdGhlaXIgY2xvc2UgdGFnLiBXZSBrZWVwIGEgd2hpdGVsaXN0IGZvclxuLy8gdGhvc2Ugc3BlY2lhbC1jYXNlIHRhZ3MuXG52YXIgb21pdHRlZENsb3NlVGFncyA9IHtcbiAgYXJlYTogdHJ1ZSxcbiAgYmFzZTogdHJ1ZSxcbiAgYnI6IHRydWUsXG4gIGNvbDogdHJ1ZSxcbiAgZW1iZWQ6IHRydWUsXG4gIGhyOiB0cnVlLFxuICBpbWc6IHRydWUsXG4gIGlucHV0OiB0cnVlLFxuICBrZXlnZW46IHRydWUsXG4gIGxpbms6IHRydWUsXG4gIG1ldGE6IHRydWUsXG4gIHBhcmFtOiB0cnVlLFxuICBzb3VyY2U6IHRydWUsXG4gIHRyYWNrOiB0cnVlLFxuICB3YnI6IHRydWUgLy8gTk9URTogbWVudWl0ZW0ncyBjbG9zZSB0YWcgc2hvdWxkIGJlIG9taXR0ZWQsIGJ1dCB0aGF0IGNhdXNlcyBwcm9ibGVtcy5cblxufTtcblxuLy8gYG9taXR0ZWRDbG9zZVRhZ3NgIGV4Y2VwdCB0aGF0IGBtZW51aXRlbWAgc2hvdWxkIHN0aWxsIGhhdmUgaXRzIGNsb3NpbmcgdGFnLlxuXG52YXIgdm9pZEVsZW1lbnRUYWdzID0gX2Fzc2lnbih7XG4gIG1lbnVpdGVtOiB0cnVlXG59LCBvbWl0dGVkQ2xvc2VUYWdzKTtcblxudmFyIEhUTUwgPSAnX19odG1sJztcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDMgPSBudWxsO1xuXG57XG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMyA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG59XG5cbmZ1bmN0aW9uIGFzc2VydFZhbGlkUHJvcHModGFnLCBwcm9wcykge1xuICBpZiAoIXByb3BzKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIE5vdGUgdGhlIHVzZSBvZiBgPT1gIHdoaWNoIGNoZWNrcyBmb3IgbnVsbCBvciB1bmRlZmluZWQuXG5cblxuICBpZiAodm9pZEVsZW1lbnRUYWdzW3RhZ10pIHtcbiAgICBpZiAoIShwcm9wcy5jaGlsZHJlbiA9PSBudWxsICYmIHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MID09IG51bGwpKSB7XG4gICAgICB7XG4gICAgICAgIHRocm93IEVycm9yKCB0YWcgKyBcIiBpcyBhIHZvaWQgZWxlbWVudCB0YWcgYW5kIG11c3QgbmVpdGhlciBoYXZlIGBjaGlsZHJlbmAgbm9yIHVzZSBgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxgLlwiICsgKCBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDMuZ2V0U3RhY2tBZGRlbmR1bSgpICkgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAocHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgIT0gbnVsbCkge1xuICAgIGlmICghKHByb3BzLmNoaWxkcmVuID09IG51bGwpKSB7XG4gICAgICB7XG4gICAgICAgIHRocm93IEVycm9yKCBcIkNhbiBvbmx5IHNldCBvbmUgb2YgYGNoaWxkcmVuYCBvciBgcHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxgLlwiICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEodHlwZW9mIHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MID09PSAnb2JqZWN0JyAmJiBIVE1MIGluIHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKSkge1xuICAgICAge1xuICAgICAgICB0aHJvdyBFcnJvciggXCJgcHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxgIG11c3QgYmUgaW4gdGhlIGZvcm0gYHtfX2h0bWw6IC4uLn1gLiBQbGVhc2UgdmlzaXQgaHR0cHM6Ly9mYi5tZS9yZWFjdC1pbnZhcmlhbnQtZGFuZ2Vyb3VzbHktc2V0LWlubmVyLWh0bWwgZm9yIG1vcmUgaW5mb3JtYXRpb24uXCIgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB7XG4gICAgaWYgKCFwcm9wcy5zdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmcgJiYgcHJvcHMuY29udGVudEVkaXRhYmxlICYmIHByb3BzLmNoaWxkcmVuICE9IG51bGwpIHtcbiAgICAgIGVycm9yKCdBIGNvbXBvbmVudCBpcyBgY29udGVudEVkaXRhYmxlYCBhbmQgY29udGFpbnMgYGNoaWxkcmVuYCBtYW5hZ2VkIGJ5ICcgKyAnUmVhY3QuIEl0IGlzIG5vdyB5b3VyIHJlc3BvbnNpYmlsaXR5IHRvIGd1YXJhbnRlZSB0aGF0IG5vbmUgb2YgJyArICd0aG9zZSBub2RlcyBhcmUgdW5leHBlY3RlZGx5IG1vZGlmaWVkIG9yIGR1cGxpY2F0ZWQuIFRoaXMgaXMgJyArICdwcm9iYWJseSBub3QgaW50ZW50aW9uYWwuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCEocHJvcHMuc3R5bGUgPT0gbnVsbCB8fCB0eXBlb2YgcHJvcHMuc3R5bGUgPT09ICdvYmplY3QnKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIlRoZSBgc3R5bGVgIHByb3AgZXhwZWN0cyBhIG1hcHBpbmcgZnJvbSBzdHlsZSBwcm9wZXJ0aWVzIHRvIHZhbHVlcywgbm90IGEgc3RyaW5nLiBGb3IgZXhhbXBsZSwgc3R5bGU9e3ttYXJnaW5SaWdodDogc3BhY2luZyArICdlbSd9fSB3aGVuIHVzaW5nIEpTWC5cIiArICggUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQzLmdldFN0YWNrQWRkZW5kdW0oKSApICk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ1NTIHByb3BlcnRpZXMgd2hpY2ggYWNjZXB0IG51bWJlcnMgYnV0IGFyZSBub3QgaW4gdW5pdHMgb2YgXCJweFwiLlxuICovXG52YXIgaXNVbml0bGVzc051bWJlciA9IHtcbiAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IHRydWUsXG4gIGJvcmRlckltYWdlT3V0c2V0OiB0cnVlLFxuICBib3JkZXJJbWFnZVNsaWNlOiB0cnVlLFxuICBib3JkZXJJbWFnZVdpZHRoOiB0cnVlLFxuICBib3hGbGV4OiB0cnVlLFxuICBib3hGbGV4R3JvdXA6IHRydWUsXG4gIGJveE9yZGluYWxHcm91cDogdHJ1ZSxcbiAgY29sdW1uQ291bnQ6IHRydWUsXG4gIGNvbHVtbnM6IHRydWUsXG4gIGZsZXg6IHRydWUsXG4gIGZsZXhHcm93OiB0cnVlLFxuICBmbGV4UG9zaXRpdmU6IHRydWUsXG4gIGZsZXhTaHJpbms6IHRydWUsXG4gIGZsZXhOZWdhdGl2ZTogdHJ1ZSxcbiAgZmxleE9yZGVyOiB0cnVlLFxuICBncmlkQXJlYTogdHJ1ZSxcbiAgZ3JpZFJvdzogdHJ1ZSxcbiAgZ3JpZFJvd0VuZDogdHJ1ZSxcbiAgZ3JpZFJvd1NwYW46IHRydWUsXG4gIGdyaWRSb3dTdGFydDogdHJ1ZSxcbiAgZ3JpZENvbHVtbjogdHJ1ZSxcbiAgZ3JpZENvbHVtbkVuZDogdHJ1ZSxcbiAgZ3JpZENvbHVtblNwYW46IHRydWUsXG4gIGdyaWRDb2x1bW5TdGFydDogdHJ1ZSxcbiAgZm9udFdlaWdodDogdHJ1ZSxcbiAgbGluZUNsYW1wOiB0cnVlLFxuICBsaW5lSGVpZ2h0OiB0cnVlLFxuICBvcGFjaXR5OiB0cnVlLFxuICBvcmRlcjogdHJ1ZSxcbiAgb3JwaGFuczogdHJ1ZSxcbiAgdGFiU2l6ZTogdHJ1ZSxcbiAgd2lkb3dzOiB0cnVlLFxuICB6SW5kZXg6IHRydWUsXG4gIHpvb206IHRydWUsXG4gIC8vIFNWRy1yZWxhdGVkIHByb3BlcnRpZXNcbiAgZmlsbE9wYWNpdHk6IHRydWUsXG4gIGZsb29kT3BhY2l0eTogdHJ1ZSxcbiAgc3RvcE9wYWNpdHk6IHRydWUsXG4gIHN0cm9rZURhc2hhcnJheTogdHJ1ZSxcbiAgc3Ryb2tlRGFzaG9mZnNldDogdHJ1ZSxcbiAgc3Ryb2tlTWl0ZXJsaW1pdDogdHJ1ZSxcbiAgc3Ryb2tlT3BhY2l0eTogdHJ1ZSxcbiAgc3Ryb2tlV2lkdGg6IHRydWVcbn07XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXggdmVuZG9yLXNwZWNpZmljIHByZWZpeCwgZWc6IFdlYmtpdFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBzdHlsZSBuYW1lLCBlZzogdHJhbnNpdGlvbkR1cmF0aW9uXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHN0eWxlIG5hbWUgcHJlZml4ZWQgd2l0aCBgcHJlZml4YCwgcHJvcGVybHkgY2FtZWxDYXNlZCwgZWc6XG4gKiBXZWJraXRUcmFuc2l0aW9uRHVyYXRpb25cbiAqL1xuXG5mdW5jdGlvbiBwcmVmaXhLZXkocHJlZml4LCBrZXkpIHtcbiAgcmV0dXJuIHByZWZpeCArIGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zdWJzdHJpbmcoMSk7XG59XG4vKipcbiAqIFN1cHBvcnQgc3R5bGUgbmFtZXMgdGhhdCBtYXkgY29tZSBwYXNzZWQgaW4gcHJlZml4ZWQgYnkgYWRkaW5nIHBlcm11dGF0aW9uc1xuICogb2YgdmVuZG9yIHByZWZpeGVzLlxuICovXG5cblxudmFyIHByZWZpeGVzID0gWydXZWJraXQnLCAnbXMnLCAnTW96JywgJ08nXTsgLy8gVXNpbmcgT2JqZWN0LmtleXMgaGVyZSwgb3IgZWxzZSB0aGUgdmFuaWxsYSBmb3ItaW4gbG9vcCBtYWtlcyBJRTggZ28gaW50byBhblxuLy8gaW5maW5pdGUgbG9vcCwgYmVjYXVzZSBpdCBpdGVyYXRlcyBvdmVyIHRoZSBuZXdseSBhZGRlZCBwcm9wcyB0b28uXG5cbk9iamVjdC5rZXlzKGlzVW5pdGxlc3NOdW1iZXIpLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgcHJlZml4ZXMuZm9yRWFjaChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgaXNVbml0bGVzc051bWJlcltwcmVmaXhLZXkocHJlZml4LCBwcm9wKV0gPSBpc1VuaXRsZXNzTnVtYmVyW3Byb3BdO1xuICB9KTtcbn0pO1xuXG4vKipcbiAqIENvbnZlcnQgYSB2YWx1ZSBpbnRvIHRoZSBwcm9wZXIgY3NzIHdyaXRhYmxlIHZhbHVlLiBUaGUgc3R5bGUgbmFtZSBgbmFtZWBcbiAqIHNob3VsZCBiZSBsb2dpY2FsIChubyBoeXBoZW5zKSwgYXMgc3BlY2lmaWVkXG4gKiBpbiBgQ1NTUHJvcGVydHkuaXNVbml0bGVzc051bWJlcmAuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgQ1NTIHByb3BlcnR5IG5hbWUgc3VjaCBhcyBgdG9wTWFyZ2luYC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQ1NTIHByb3BlcnR5IHZhbHVlIHN1Y2ggYXMgYDEwcHhgLlxuICogQHJldHVybiB7c3RyaW5nfSBOb3JtYWxpemVkIHN0eWxlIHZhbHVlIHdpdGggZGltZW5zaW9ucyBhcHBsaWVkLlxuICovXG5cbmZ1bmN0aW9uIGRhbmdlcm91c1N0eWxlVmFsdWUobmFtZSwgdmFsdWUsIGlzQ3VzdG9tUHJvcGVydHkpIHtcbiAgLy8gTm90ZSB0aGF0IHdlJ3ZlIHJlbW92ZWQgZXNjYXBlVGV4dEZvckJyb3dzZXIoKSBjYWxscyBoZXJlIHNpbmNlIHRoZVxuICAvLyB3aG9sZSBzdHJpbmcgd2lsbCBiZSBlc2NhcGVkIHdoZW4gdGhlIGF0dHJpYnV0ZSBpcyBpbmplY3RlZCBpbnRvXG4gIC8vIHRoZSBtYXJrdXAuIElmIHlvdSBwcm92aWRlIHVuc2FmZSB1c2VyIGRhdGEgaGVyZSB0aGV5IGNhbiBpbmplY3RcbiAgLy8gYXJiaXRyYXJ5IENTUyB3aGljaCBtYXkgYmUgcHJvYmxlbWF0aWMgKEkgY291bGRuJ3QgcmVwcm8gdGhpcyk6XG4gIC8vIGh0dHBzOi8vd3d3Lm93YXNwLm9yZy9pbmRleC5waHAvWFNTX0ZpbHRlcl9FdmFzaW9uX0NoZWF0X1NoZWV0XG4gIC8vIGh0dHA6Ly93d3cudGhlc3Bhbm5lci5jby51ay8yMDA3LzExLzI2L3VsdGltYXRlLXhzcy1jc3MtaW5qZWN0aW9uL1xuICAvLyBUaGlzIGlzIG5vdCBhbiBYU1MgaG9sZSBidXQgaW5zdGVhZCBhIHBvdGVudGlhbCBDU1MgaW5qZWN0aW9uIGlzc3VlXG4gIC8vIHdoaWNoIGhhcyBsZWFkIHRvIGEgZ3JlYXRlciBkaXNjdXNzaW9uIGFib3V0IGhvdyB3ZSdyZSBnb2luZyB0b1xuICAvLyB0cnVzdCBVUkxzIG1vdmluZyBmb3J3YXJkLiBTZWUgIzIxMTU5MDFcbiAgdmFyIGlzRW1wdHkgPSB2YWx1ZSA9PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nIHx8IHZhbHVlID09PSAnJztcblxuICBpZiAoaXNFbXB0eSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICghaXNDdXN0b21Qcm9wZXJ0eSAmJiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIHZhbHVlICE9PSAwICYmICEoaXNVbml0bGVzc051bWJlci5oYXNPd25Qcm9wZXJ0eShuYW1lKSAmJiBpc1VuaXRsZXNzTnVtYmVyW25hbWVdKSkge1xuICAgIHJldHVybiB2YWx1ZSArICdweCc7IC8vIFByZXN1bWVzIGltcGxpY2l0ICdweCcgc3VmZml4IGZvciB1bml0bGVzcyBudW1iZXJzXG4gIH1cblxuICByZXR1cm4gKCcnICsgdmFsdWUpLnRyaW0oKTtcbn1cblxudmFyIHVwcGVyY2FzZVBhdHRlcm4gPSAvKFtBLVpdKS9nO1xudmFyIG1zUGF0dGVybiA9IC9ebXMtLztcbi8qKlxuICogSHlwaGVuYXRlcyBhIGNhbWVsY2FzZWQgQ1NTIHByb3BlcnR5IG5hbWUsIGZvciBleGFtcGxlOlxuICpcbiAqICAgPiBoeXBoZW5hdGVTdHlsZU5hbWUoJ2JhY2tncm91bmRDb2xvcicpXG4gKiAgIDwgXCJiYWNrZ3JvdW5kLWNvbG9yXCJcbiAqICAgPiBoeXBoZW5hdGVTdHlsZU5hbWUoJ01velRyYW5zaXRpb24nKVxuICogICA8IFwiLW1vei10cmFuc2l0aW9uXCJcbiAqICAgPiBoeXBoZW5hdGVTdHlsZU5hbWUoJ21zVHJhbnNpdGlvbicpXG4gKiAgIDwgXCItbXMtdHJhbnNpdGlvblwiXG4gKlxuICogQXMgTW9kZXJuaXpyIHN1Z2dlc3RzIChodHRwOi8vbW9kZXJuaXpyLmNvbS9kb2NzLyNwcmVmaXhlZCksIGFuIGBtc2AgcHJlZml4XG4gKiBpcyBjb252ZXJ0ZWQgdG8gYC1tcy1gLlxuICovXG5cbmZ1bmN0aW9uIGh5cGhlbmF0ZVN0eWxlTmFtZShuYW1lKSB7XG4gIHJldHVybiBuYW1lLnJlcGxhY2UodXBwZXJjYXNlUGF0dGVybiwgJy0kMScpLnRvTG93ZXJDYXNlKCkucmVwbGFjZShtc1BhdHRlcm4sICctbXMtJyk7XG59XG5cbmZ1bmN0aW9uIGlzQ3VzdG9tQ29tcG9uZW50KHRhZ05hbWUsIHByb3BzKSB7XG4gIGlmICh0YWdOYW1lLmluZGV4T2YoJy0nKSA9PT0gLTEpIHtcbiAgICByZXR1cm4gdHlwZW9mIHByb3BzLmlzID09PSAnc3RyaW5nJztcbiAgfVxuXG4gIHN3aXRjaCAodGFnTmFtZSkge1xuICAgIC8vIFRoZXNlIGFyZSByZXNlcnZlZCBTVkcgYW5kIE1hdGhNTCBlbGVtZW50cy5cbiAgICAvLyBXZSBkb24ndCBtaW5kIHRoaXMgd2hpdGVsaXN0IHRvbyBtdWNoIGJlY2F1c2Ugd2UgZXhwZWN0IGl0IHRvIG5ldmVyIGdyb3cuXG4gICAgLy8gVGhlIGFsdGVybmF0aXZlIGlzIHRvIHRyYWNrIHRoZSBuYW1lc3BhY2UgaW4gYSBmZXcgcGxhY2VzIHdoaWNoIGlzIGNvbnZvbHV0ZWQuXG4gICAgLy8gaHR0cHM6Ly93M2MuZ2l0aHViLmlvL3dlYmNvbXBvbmVudHMvc3BlYy9jdXN0b20vI2N1c3RvbS1lbGVtZW50cy1jb3JlLWNvbmNlcHRzXG4gICAgY2FzZSAnYW5ub3RhdGlvbi14bWwnOlxuICAgIGNhc2UgJ2NvbG9yLXByb2ZpbGUnOlxuICAgIGNhc2UgJ2ZvbnQtZmFjZSc6XG4gICAgY2FzZSAnZm9udC1mYWNlLXNyYyc6XG4gICAgY2FzZSAnZm9udC1mYWNlLXVyaSc6XG4gICAgY2FzZSAnZm9udC1mYWNlLWZvcm1hdCc6XG4gICAgY2FzZSAnZm9udC1mYWNlLW5hbWUnOlxuICAgIGNhc2UgJ21pc3NpbmctZ2x5cGgnOlxuICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbnZhciB3YXJuVmFsaWRTdHlsZSA9IGZ1bmN0aW9uICgpIHt9O1xuXG57XG4gIC8vICdtc1RyYW5zZm9ybScgaXMgY29ycmVjdCwgYnV0IHRoZSBvdGhlciBwcmVmaXhlcyBzaG91bGQgYmUgY2FwaXRhbGl6ZWRcbiAgdmFyIGJhZFZlbmRvcmVkU3R5bGVOYW1lUGF0dGVybiA9IC9eKD86d2Via2l0fG1venxvKVtBLVpdLztcbiAgdmFyIG1zUGF0dGVybiQxID0gL14tbXMtLztcbiAgdmFyIGh5cGhlblBhdHRlcm4gPSAvLSguKS9nOyAvLyBzdHlsZSB2YWx1ZXMgc2hvdWxkbid0IGNvbnRhaW4gYSBzZW1pY29sb25cblxuICB2YXIgYmFkU3R5bGVWYWx1ZVdpdGhTZW1pY29sb25QYXR0ZXJuID0gLztcXHMqJC87XG4gIHZhciB3YXJuZWRTdHlsZU5hbWVzID0ge307XG4gIHZhciB3YXJuZWRTdHlsZVZhbHVlcyA9IHt9O1xuICB2YXIgd2FybmVkRm9yTmFOVmFsdWUgPSBmYWxzZTtcbiAgdmFyIHdhcm5lZEZvckluZmluaXR5VmFsdWUgPSBmYWxzZTtcblxuICB2YXIgY2FtZWxpemUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKGh5cGhlblBhdHRlcm4sIGZ1bmN0aW9uIChfLCBjaGFyYWN0ZXIpIHtcbiAgICAgIHJldHVybiBjaGFyYWN0ZXIudG9VcHBlckNhc2UoKTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgd2Fybkh5cGhlbmF0ZWRTdHlsZU5hbWUgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIGlmICh3YXJuZWRTdHlsZU5hbWVzLmhhc093blByb3BlcnR5KG5hbWUpICYmIHdhcm5lZFN0eWxlTmFtZXNbbmFtZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3YXJuZWRTdHlsZU5hbWVzW25hbWVdID0gdHJ1ZTtcblxuICAgIGVycm9yKCdVbnN1cHBvcnRlZCBzdHlsZSBwcm9wZXJ0eSAlcy4gRGlkIHlvdSBtZWFuICVzPycsIG5hbWUsIC8vIEFzIEFuZGkgU21pdGggc3VnZ2VzdHNcbiAgICAvLyAoaHR0cDovL3d3dy5hbmRpc21pdGguY29tL2Jsb2cvMjAxMi8wMi9tb2Rlcm5penItcHJlZml4ZWQvKSwgYW4gYC1tc2AgcHJlZml4XG4gICAgLy8gaXMgY29udmVydGVkIHRvIGxvd2VyY2FzZSBgbXNgLlxuICAgIGNhbWVsaXplKG5hbWUucmVwbGFjZShtc1BhdHRlcm4kMSwgJ21zLScpKSk7XG4gIH07XG5cbiAgdmFyIHdhcm5CYWRWZW5kb3JlZFN0eWxlTmFtZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgaWYgKHdhcm5lZFN0eWxlTmFtZXMuaGFzT3duUHJvcGVydHkobmFtZSkgJiYgd2FybmVkU3R5bGVOYW1lc1tuYW1lXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdhcm5lZFN0eWxlTmFtZXNbbmFtZV0gPSB0cnVlO1xuXG4gICAgZXJyb3IoJ1Vuc3VwcG9ydGVkIHZlbmRvci1wcmVmaXhlZCBzdHlsZSBwcm9wZXJ0eSAlcy4gRGlkIHlvdSBtZWFuICVzPycsIG5hbWUsIG5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpKTtcbiAgfTtcblxuICB2YXIgd2FyblN0eWxlVmFsdWVXaXRoU2VtaWNvbG9uID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHdhcm5lZFN0eWxlVmFsdWVzLmhhc093blByb3BlcnR5KHZhbHVlKSAmJiB3YXJuZWRTdHlsZVZhbHVlc1t2YWx1ZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3YXJuZWRTdHlsZVZhbHVlc1t2YWx1ZV0gPSB0cnVlO1xuXG4gICAgZXJyb3IoXCJTdHlsZSBwcm9wZXJ0eSB2YWx1ZXMgc2hvdWxkbid0IGNvbnRhaW4gYSBzZW1pY29sb24uIFwiICsgJ1RyeSBcIiVzOiAlc1wiIGluc3RlYWQuJywgbmFtZSwgdmFsdWUucmVwbGFjZShiYWRTdHlsZVZhbHVlV2l0aFNlbWljb2xvblBhdHRlcm4sICcnKSk7XG4gIH07XG5cbiAgdmFyIHdhcm5TdHlsZVZhbHVlSXNOYU4gPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICBpZiAod2FybmVkRm9yTmFOVmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3YXJuZWRGb3JOYU5WYWx1ZSA9IHRydWU7XG5cbiAgICBlcnJvcignYE5hTmAgaXMgYW4gaW52YWxpZCB2YWx1ZSBmb3IgdGhlIGAlc2AgY3NzIHN0eWxlIHByb3BlcnR5LicsIG5hbWUpO1xuICB9O1xuXG4gIHZhciB3YXJuU3R5bGVWYWx1ZUlzSW5maW5pdHkgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICBpZiAod2FybmVkRm9ySW5maW5pdHlWYWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdhcm5lZEZvckluZmluaXR5VmFsdWUgPSB0cnVlO1xuXG4gICAgZXJyb3IoJ2BJbmZpbml0eWAgaXMgYW4gaW52YWxpZCB2YWx1ZSBmb3IgdGhlIGAlc2AgY3NzIHN0eWxlIHByb3BlcnR5LicsIG5hbWUpO1xuICB9O1xuXG4gIHdhcm5WYWxpZFN0eWxlID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKG5hbWUuaW5kZXhPZignLScpID4gLTEpIHtcbiAgICAgIHdhcm5IeXBoZW5hdGVkU3R5bGVOYW1lKG5hbWUpO1xuICAgIH0gZWxzZSBpZiAoYmFkVmVuZG9yZWRTdHlsZU5hbWVQYXR0ZXJuLnRlc3QobmFtZSkpIHtcbiAgICAgIHdhcm5CYWRWZW5kb3JlZFN0eWxlTmFtZShuYW1lKTtcbiAgICB9IGVsc2UgaWYgKGJhZFN0eWxlVmFsdWVXaXRoU2VtaWNvbG9uUGF0dGVybi50ZXN0KHZhbHVlKSkge1xuICAgICAgd2FyblN0eWxlVmFsdWVXaXRoU2VtaWNvbG9uKG5hbWUsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgaWYgKGlzTmFOKHZhbHVlKSkge1xuICAgICAgICB3YXJuU3R5bGVWYWx1ZUlzTmFOKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoIWlzRmluaXRlKHZhbHVlKSkge1xuICAgICAgICB3YXJuU3R5bGVWYWx1ZUlzSW5maW5pdHkobmFtZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxudmFyIHdhcm5WYWxpZFN0eWxlJDEgPSB3YXJuVmFsaWRTdHlsZTtcblxudmFyIGFyaWFQcm9wZXJ0aWVzID0ge1xuICAnYXJpYS1jdXJyZW50JzogMCxcbiAgLy8gc3RhdGVcbiAgJ2FyaWEtZGV0YWlscyc6IDAsXG4gICdhcmlhLWRpc2FibGVkJzogMCxcbiAgLy8gc3RhdGVcbiAgJ2FyaWEtaGlkZGVuJzogMCxcbiAgLy8gc3RhdGVcbiAgJ2FyaWEtaW52YWxpZCc6IDAsXG4gIC8vIHN0YXRlXG4gICdhcmlhLWtleXNob3J0Y3V0cyc6IDAsXG4gICdhcmlhLWxhYmVsJzogMCxcbiAgJ2FyaWEtcm9sZWRlc2NyaXB0aW9uJzogMCxcbiAgLy8gV2lkZ2V0IEF0dHJpYnV0ZXNcbiAgJ2FyaWEtYXV0b2NvbXBsZXRlJzogMCxcbiAgJ2FyaWEtY2hlY2tlZCc6IDAsXG4gICdhcmlhLWV4cGFuZGVkJzogMCxcbiAgJ2FyaWEtaGFzcG9wdXAnOiAwLFxuICAnYXJpYS1sZXZlbCc6IDAsXG4gICdhcmlhLW1vZGFsJzogMCxcbiAgJ2FyaWEtbXVsdGlsaW5lJzogMCxcbiAgJ2FyaWEtbXVsdGlzZWxlY3RhYmxlJzogMCxcbiAgJ2FyaWEtb3JpZW50YXRpb24nOiAwLFxuICAnYXJpYS1wbGFjZWhvbGRlcic6IDAsXG4gICdhcmlhLXByZXNzZWQnOiAwLFxuICAnYXJpYS1yZWFkb25seSc6IDAsXG4gICdhcmlhLXJlcXVpcmVkJzogMCxcbiAgJ2FyaWEtc2VsZWN0ZWQnOiAwLFxuICAnYXJpYS1zb3J0JzogMCxcbiAgJ2FyaWEtdmFsdWVtYXgnOiAwLFxuICAnYXJpYS12YWx1ZW1pbic6IDAsXG4gICdhcmlhLXZhbHVlbm93JzogMCxcbiAgJ2FyaWEtdmFsdWV0ZXh0JzogMCxcbiAgLy8gTGl2ZSBSZWdpb24gQXR0cmlidXRlc1xuICAnYXJpYS1hdG9taWMnOiAwLFxuICAnYXJpYS1idXN5JzogMCxcbiAgJ2FyaWEtbGl2ZSc6IDAsXG4gICdhcmlhLXJlbGV2YW50JzogMCxcbiAgLy8gRHJhZy1hbmQtRHJvcCBBdHRyaWJ1dGVzXG4gICdhcmlhLWRyb3BlZmZlY3QnOiAwLFxuICAnYXJpYS1ncmFiYmVkJzogMCxcbiAgLy8gUmVsYXRpb25zaGlwIEF0dHJpYnV0ZXNcbiAgJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCc6IDAsXG4gICdhcmlhLWNvbGNvdW50JzogMCxcbiAgJ2FyaWEtY29saW5kZXgnOiAwLFxuICAnYXJpYS1jb2xzcGFuJzogMCxcbiAgJ2FyaWEtY29udHJvbHMnOiAwLFxuICAnYXJpYS1kZXNjcmliZWRieSc6IDAsXG4gICdhcmlhLWVycm9ybWVzc2FnZSc6IDAsXG4gICdhcmlhLWZsb3d0byc6IDAsXG4gICdhcmlhLWxhYmVsbGVkYnknOiAwLFxuICAnYXJpYS1vd25zJzogMCxcbiAgJ2FyaWEtcG9zaW5zZXQnOiAwLFxuICAnYXJpYS1yb3djb3VudCc6IDAsXG4gICdhcmlhLXJvd2luZGV4JzogMCxcbiAgJ2FyaWEtcm93c3Bhbic6IDAsXG4gICdhcmlhLXNldHNpemUnOiAwXG59O1xuXG52YXIgd2FybmVkUHJvcGVydGllcyA9IHt9O1xudmFyIHJBUklBID0gbmV3IFJlZ0V4cCgnXihhcmlhKS1bJyArIEFUVFJJQlVURV9OQU1FX0NIQVIgKyAnXSokJyk7XG52YXIgckFSSUFDYW1lbCA9IG5ldyBSZWdFeHAoJ14oYXJpYSlbQS1aXVsnICsgQVRUUklCVVRFX05BTUVfQ0hBUiArICddKiQnKTtcbnZhciBoYXNPd25Qcm9wZXJ0eSQxID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wZXJ0eSh0YWdOYW1lLCBuYW1lKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkkMS5jYWxsKHdhcm5lZFByb3BlcnRpZXMsIG5hbWUpICYmIHdhcm5lZFByb3BlcnRpZXNbbmFtZV0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChyQVJJQUNhbWVsLnRlc3QobmFtZSkpIHtcbiAgICAgIHZhciBhcmlhTmFtZSA9ICdhcmlhLScgKyBuYW1lLnNsaWNlKDQpLnRvTG93ZXJDYXNlKCk7XG4gICAgICB2YXIgY29ycmVjdE5hbWUgPSBhcmlhUHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShhcmlhTmFtZSkgPyBhcmlhTmFtZSA6IG51bGw7IC8vIElmIHRoaXMgaXMgYW4gYXJpYS0qIGF0dHJpYnV0ZSwgYnV0IGlzIG5vdCBsaXN0ZWQgaW4gdGhlIGtub3duIERPTVxuICAgICAgLy8gRE9NIHByb3BlcnRpZXMsIHRoZW4gaXQgaXMgYW4gaW52YWxpZCBhcmlhLSogYXR0cmlidXRlLlxuXG4gICAgICBpZiAoY29ycmVjdE5hbWUgPT0gbnVsbCkge1xuICAgICAgICBlcnJvcignSW52YWxpZCBBUklBIGF0dHJpYnV0ZSBgJXNgLiBBUklBIGF0dHJpYnV0ZXMgZm9sbG93IHRoZSBwYXR0ZXJuIGFyaWEtKiBhbmQgbXVzdCBiZSBsb3dlcmNhc2UuJywgbmFtZSk7XG5cbiAgICAgICAgd2FybmVkUHJvcGVydGllc1tuYW1lXSA9IHRydWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSAvLyBhcmlhLSogYXR0cmlidXRlcyBzaG91bGQgYmUgbG93ZXJjYXNlOyBzdWdnZXN0IHRoZSBsb3dlcmNhc2UgdmVyc2lvbi5cblxuXG4gICAgICBpZiAobmFtZSAhPT0gY29ycmVjdE5hbWUpIHtcbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgQVJJQSBhdHRyaWJ1dGUgYCVzYC4gRGlkIHlvdSBtZWFuIGAlc2A/JywgbmFtZSwgY29ycmVjdE5hbWUpO1xuXG4gICAgICAgIHdhcm5lZFByb3BlcnRpZXNbbmFtZV0gPSB0cnVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAockFSSUEudGVzdChuYW1lKSkge1xuICAgICAgdmFyIGxvd2VyQ2FzZWROYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgdmFyIHN0YW5kYXJkTmFtZSA9IGFyaWFQcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGxvd2VyQ2FzZWROYW1lKSA/IGxvd2VyQ2FzZWROYW1lIDogbnVsbDsgLy8gSWYgdGhpcyBpcyBhbiBhcmlhLSogYXR0cmlidXRlLCBidXQgaXMgbm90IGxpc3RlZCBpbiB0aGUga25vd24gRE9NXG4gICAgICAvLyBET00gcHJvcGVydGllcywgdGhlbiBpdCBpcyBhbiBpbnZhbGlkIGFyaWEtKiBhdHRyaWJ1dGUuXG5cbiAgICAgIGlmIChzdGFuZGFyZE5hbWUgPT0gbnVsbCkge1xuICAgICAgICB3YXJuZWRQcm9wZXJ0aWVzW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSAvLyBhcmlhLSogYXR0cmlidXRlcyBzaG91bGQgYmUgbG93ZXJjYXNlOyBzdWdnZXN0IHRoZSBsb3dlcmNhc2UgdmVyc2lvbi5cblxuXG4gICAgICBpZiAobmFtZSAhPT0gc3RhbmRhcmROYW1lKSB7XG4gICAgICAgIGVycm9yKCdVbmtub3duIEFSSUEgYXR0cmlidXRlIGAlc2AuIERpZCB5b3UgbWVhbiBgJXNgPycsIG5hbWUsIHN0YW5kYXJkTmFtZSk7XG5cbiAgICAgICAgd2FybmVkUHJvcGVydGllc1tuYW1lXSA9IHRydWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiB3YXJuSW52YWxpZEFSSUFQcm9wcyh0eXBlLCBwcm9wcykge1xuICB7XG4gICAgdmFyIGludmFsaWRQcm9wcyA9IFtdO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICB2YXIgaXNWYWxpZCA9IHZhbGlkYXRlUHJvcGVydHkodHlwZSwga2V5KTtcblxuICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgIGludmFsaWRQcm9wcy5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHVua25vd25Qcm9wU3RyaW5nID0gaW52YWxpZFByb3BzLm1hcChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgcmV0dXJuICdgJyArIHByb3AgKyAnYCc7XG4gICAgfSkuam9pbignLCAnKTtcblxuICAgIGlmIChpbnZhbGlkUHJvcHMubGVuZ3RoID09PSAxKSB7XG4gICAgICBlcnJvcignSW52YWxpZCBhcmlhIHByb3AgJXMgb24gPCVzPiB0YWcuICcgKyAnRm9yIGRldGFpbHMsIHNlZSBodHRwczovL2ZiLm1lL2ludmFsaWQtYXJpYS1wcm9wJywgdW5rbm93blByb3BTdHJpbmcsIHR5cGUpO1xuICAgIH0gZWxzZSBpZiAoaW52YWxpZFByb3BzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGVycm9yKCdJbnZhbGlkIGFyaWEgcHJvcHMgJXMgb24gPCVzPiB0YWcuICcgKyAnRm9yIGRldGFpbHMsIHNlZSBodHRwczovL2ZiLm1lL2ludmFsaWQtYXJpYS1wcm9wJywgdW5rbm93blByb3BTdHJpbmcsIHR5cGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BlcnRpZXModHlwZSwgcHJvcHMpIHtcbiAgaWYgKGlzQ3VzdG9tQ29tcG9uZW50KHR5cGUsIHByb3BzKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHdhcm5JbnZhbGlkQVJJQVByb3BzKHR5cGUsIHByb3BzKTtcbn1cblxudmFyIGRpZFdhcm5WYWx1ZU51bGwgPSBmYWxzZTtcbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcGVydGllcyQxKHR5cGUsIHByb3BzKSB7XG4gIHtcbiAgICBpZiAodHlwZSAhPT0gJ2lucHV0JyAmJiB0eXBlICE9PSAndGV4dGFyZWEnICYmIHR5cGUgIT09ICdzZWxlY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BzICE9IG51bGwgJiYgcHJvcHMudmFsdWUgPT09IG51bGwgJiYgIWRpZFdhcm5WYWx1ZU51bGwpIHtcbiAgICAgIGRpZFdhcm5WYWx1ZU51bGwgPSB0cnVlO1xuXG4gICAgICBpZiAodHlwZSA9PT0gJ3NlbGVjdCcgJiYgcHJvcHMubXVsdGlwbGUpIHtcbiAgICAgICAgZXJyb3IoJ2B2YWx1ZWAgcHJvcCBvbiBgJXNgIHNob3VsZCBub3QgYmUgbnVsbC4gJyArICdDb25zaWRlciB1c2luZyBhbiBlbXB0eSBhcnJheSB3aGVuIGBtdWx0aXBsZWAgaXMgc2V0IHRvIGB0cnVlYCAnICsgJ3RvIGNsZWFyIHRoZSBjb21wb25lbnQgb3IgYHVuZGVmaW5lZGAgZm9yIHVuY29udHJvbGxlZCBjb21wb25lbnRzLicsIHR5cGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3IoJ2B2YWx1ZWAgcHJvcCBvbiBgJXNgIHNob3VsZCBub3QgYmUgbnVsbC4gJyArICdDb25zaWRlciB1c2luZyBhbiBlbXB0eSBzdHJpbmcgdG8gY2xlYXIgdGhlIGNvbXBvbmVudCBvciBgdW5kZWZpbmVkYCAnICsgJ2ZvciB1bmNvbnRyb2xsZWQgY29tcG9uZW50cy4nLCB0eXBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBNYXBwaW5nIGZyb20gcmVnaXN0cmF0aW9uIG5hbWUgdG8gcGx1Z2luIG1vZHVsZVxuICovXG5cbnZhciByZWdpc3RyYXRpb25OYW1lTW9kdWxlcyA9IHt9O1xuLyoqXG4gKiBNYXBwaW5nIGZyb20gbG93ZXJjYXNlIHJlZ2lzdHJhdGlvbiBuYW1lcyB0byB0aGUgcHJvcGVybHkgY2FzZWQgdmVyc2lvbixcbiAqIHVzZWQgdG8gd2FybiBpbiB0aGUgY2FzZSBvZiBtaXNzaW5nIGV2ZW50IGhhbmRsZXJzLiBBdmFpbGFibGVcbiAqIG9ubHkgaW4gdHJ1ZS5cbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cblxudmFyIHBvc3NpYmxlUmVnaXN0cmF0aW9uTmFtZXMgPSAge30gOyAvLyBUcnVzdCB0aGUgZGV2ZWxvcGVyIHRvIG9ubHkgdXNlIHBvc3NpYmxlUmVnaXN0cmF0aW9uTmFtZXMgaW4gdHJ1ZVxuXG4vLyBXaGVuIGFkZGluZyBhdHRyaWJ1dGVzIHRvIHRoZSBIVE1MIG9yIFNWRyB3aGl0ZWxpc3QsIGJlIHN1cmUgdG9cbi8vIGFsc28gYWRkIHRoZW0gdG8gdGhpcyBtb2R1bGUgdG8gZW5zdXJlIGNhc2luZyBhbmQgaW5jb3JyZWN0IG5hbWVcbi8vIHdhcm5pbmdzLlxudmFyIHBvc3NpYmxlU3RhbmRhcmROYW1lcyA9IHtcbiAgLy8gSFRNTFxuICBhY2NlcHQ6ICdhY2NlcHQnLFxuICBhY2NlcHRjaGFyc2V0OiAnYWNjZXB0Q2hhcnNldCcsXG4gICdhY2NlcHQtY2hhcnNldCc6ICdhY2NlcHRDaGFyc2V0JyxcbiAgYWNjZXNza2V5OiAnYWNjZXNzS2V5JyxcbiAgYWN0aW9uOiAnYWN0aW9uJyxcbiAgYWxsb3dmdWxsc2NyZWVuOiAnYWxsb3dGdWxsU2NyZWVuJyxcbiAgYWx0OiAnYWx0JyxcbiAgYXM6ICdhcycsXG4gIGFzeW5jOiAnYXN5bmMnLFxuICBhdXRvY2FwaXRhbGl6ZTogJ2F1dG9DYXBpdGFsaXplJyxcbiAgYXV0b2NvbXBsZXRlOiAnYXV0b0NvbXBsZXRlJyxcbiAgYXV0b2NvcnJlY3Q6ICdhdXRvQ29ycmVjdCcsXG4gIGF1dG9mb2N1czogJ2F1dG9Gb2N1cycsXG4gIGF1dG9wbGF5OiAnYXV0b1BsYXknLFxuICBhdXRvc2F2ZTogJ2F1dG9TYXZlJyxcbiAgY2FwdHVyZTogJ2NhcHR1cmUnLFxuICBjZWxscGFkZGluZzogJ2NlbGxQYWRkaW5nJyxcbiAgY2VsbHNwYWNpbmc6ICdjZWxsU3BhY2luZycsXG4gIGNoYWxsZW5nZTogJ2NoYWxsZW5nZScsXG4gIGNoYXJzZXQ6ICdjaGFyU2V0JyxcbiAgY2hlY2tlZDogJ2NoZWNrZWQnLFxuICBjaGlsZHJlbjogJ2NoaWxkcmVuJyxcbiAgY2l0ZTogJ2NpdGUnLFxuICBjbGFzczogJ2NsYXNzTmFtZScsXG4gIGNsYXNzaWQ6ICdjbGFzc0lEJyxcbiAgY2xhc3NuYW1lOiAnY2xhc3NOYW1lJyxcbiAgY29sczogJ2NvbHMnLFxuICBjb2xzcGFuOiAnY29sU3BhbicsXG4gIGNvbnRlbnQ6ICdjb250ZW50JyxcbiAgY29udGVudGVkaXRhYmxlOiAnY29udGVudEVkaXRhYmxlJyxcbiAgY29udGV4dG1lbnU6ICdjb250ZXh0TWVudScsXG4gIGNvbnRyb2xzOiAnY29udHJvbHMnLFxuICBjb250cm9sc2xpc3Q6ICdjb250cm9sc0xpc3QnLFxuICBjb29yZHM6ICdjb29yZHMnLFxuICBjcm9zc29yaWdpbjogJ2Nyb3NzT3JpZ2luJyxcbiAgZGFuZ2Vyb3VzbHlzZXRpbm5lcmh0bWw6ICdkYW5nZXJvdXNseVNldElubmVySFRNTCcsXG4gIGRhdGE6ICdkYXRhJyxcbiAgZGF0ZXRpbWU6ICdkYXRlVGltZScsXG4gIGRlZmF1bHQ6ICdkZWZhdWx0JyxcbiAgZGVmYXVsdGNoZWNrZWQ6ICdkZWZhdWx0Q2hlY2tlZCcsXG4gIGRlZmF1bHR2YWx1ZTogJ2RlZmF1bHRWYWx1ZScsXG4gIGRlZmVyOiAnZGVmZXInLFxuICBkaXI6ICdkaXInLFxuICBkaXNhYmxlZDogJ2Rpc2FibGVkJyxcbiAgZGlzYWJsZXBpY3R1cmVpbnBpY3R1cmU6ICdkaXNhYmxlUGljdHVyZUluUGljdHVyZScsXG4gIGRvd25sb2FkOiAnZG93bmxvYWQnLFxuICBkcmFnZ2FibGU6ICdkcmFnZ2FibGUnLFxuICBlbmN0eXBlOiAnZW5jVHlwZScsXG4gIGZvcjogJ2h0bWxGb3InLFxuICBmb3JtOiAnZm9ybScsXG4gIGZvcm1tZXRob2Q6ICdmb3JtTWV0aG9kJyxcbiAgZm9ybWFjdGlvbjogJ2Zvcm1BY3Rpb24nLFxuICBmb3JtZW5jdHlwZTogJ2Zvcm1FbmNUeXBlJyxcbiAgZm9ybW5vdmFsaWRhdGU6ICdmb3JtTm9WYWxpZGF0ZScsXG4gIGZvcm10YXJnZXQ6ICdmb3JtVGFyZ2V0JyxcbiAgZnJhbWVib3JkZXI6ICdmcmFtZUJvcmRlcicsXG4gIGhlYWRlcnM6ICdoZWFkZXJzJyxcbiAgaGVpZ2h0OiAnaGVpZ2h0JyxcbiAgaGlkZGVuOiAnaGlkZGVuJyxcbiAgaGlnaDogJ2hpZ2gnLFxuICBocmVmOiAnaHJlZicsXG4gIGhyZWZsYW5nOiAnaHJlZkxhbmcnLFxuICBodG1sZm9yOiAnaHRtbEZvcicsXG4gIGh0dHBlcXVpdjogJ2h0dHBFcXVpdicsXG4gICdodHRwLWVxdWl2JzogJ2h0dHBFcXVpdicsXG4gIGljb246ICdpY29uJyxcbiAgaWQ6ICdpZCcsXG4gIGlubmVyaHRtbDogJ2lubmVySFRNTCcsXG4gIGlucHV0bW9kZTogJ2lucHV0TW9kZScsXG4gIGludGVncml0eTogJ2ludGVncml0eScsXG4gIGlzOiAnaXMnLFxuICBpdGVtaWQ6ICdpdGVtSUQnLFxuICBpdGVtcHJvcDogJ2l0ZW1Qcm9wJyxcbiAgaXRlbXJlZjogJ2l0ZW1SZWYnLFxuICBpdGVtc2NvcGU6ICdpdGVtU2NvcGUnLFxuICBpdGVtdHlwZTogJ2l0ZW1UeXBlJyxcbiAga2V5cGFyYW1zOiAna2V5UGFyYW1zJyxcbiAga2V5dHlwZTogJ2tleVR5cGUnLFxuICBraW5kOiAna2luZCcsXG4gIGxhYmVsOiAnbGFiZWwnLFxuICBsYW5nOiAnbGFuZycsXG4gIGxpc3Q6ICdsaXN0JyxcbiAgbG9vcDogJ2xvb3AnLFxuICBsb3c6ICdsb3cnLFxuICBtYW5pZmVzdDogJ21hbmlmZXN0JyxcbiAgbWFyZ2lud2lkdGg6ICdtYXJnaW5XaWR0aCcsXG4gIG1hcmdpbmhlaWdodDogJ21hcmdpbkhlaWdodCcsXG4gIG1heDogJ21heCcsXG4gIG1heGxlbmd0aDogJ21heExlbmd0aCcsXG4gIG1lZGlhOiAnbWVkaWEnLFxuICBtZWRpYWdyb3VwOiAnbWVkaWFHcm91cCcsXG4gIG1ldGhvZDogJ21ldGhvZCcsXG4gIG1pbjogJ21pbicsXG4gIG1pbmxlbmd0aDogJ21pbkxlbmd0aCcsXG4gIG11bHRpcGxlOiAnbXVsdGlwbGUnLFxuICBtdXRlZDogJ211dGVkJyxcbiAgbmFtZTogJ25hbWUnLFxuICBub21vZHVsZTogJ25vTW9kdWxlJyxcbiAgbm9uY2U6ICdub25jZScsXG4gIG5vdmFsaWRhdGU6ICdub1ZhbGlkYXRlJyxcbiAgb3BlbjogJ29wZW4nLFxuICBvcHRpbXVtOiAnb3B0aW11bScsXG4gIHBhdHRlcm46ICdwYXR0ZXJuJyxcbiAgcGxhY2Vob2xkZXI6ICdwbGFjZWhvbGRlcicsXG4gIHBsYXlzaW5saW5lOiAncGxheXNJbmxpbmUnLFxuICBwb3N0ZXI6ICdwb3N0ZXInLFxuICBwcmVsb2FkOiAncHJlbG9hZCcsXG4gIHByb2ZpbGU6ICdwcm9maWxlJyxcbiAgcmFkaW9ncm91cDogJ3JhZGlvR3JvdXAnLFxuICByZWFkb25seTogJ3JlYWRPbmx5JyxcbiAgcmVmZXJyZXJwb2xpY3k6ICdyZWZlcnJlclBvbGljeScsXG4gIHJlbDogJ3JlbCcsXG4gIHJlcXVpcmVkOiAncmVxdWlyZWQnLFxuICByZXZlcnNlZDogJ3JldmVyc2VkJyxcbiAgcm9sZTogJ3JvbGUnLFxuICByb3dzOiAncm93cycsXG4gIHJvd3NwYW46ICdyb3dTcGFuJyxcbiAgc2FuZGJveDogJ3NhbmRib3gnLFxuICBzY29wZTogJ3Njb3BlJyxcbiAgc2NvcGVkOiAnc2NvcGVkJyxcbiAgc2Nyb2xsaW5nOiAnc2Nyb2xsaW5nJyxcbiAgc2VhbWxlc3M6ICdzZWFtbGVzcycsXG4gIHNlbGVjdGVkOiAnc2VsZWN0ZWQnLFxuICBzaGFwZTogJ3NoYXBlJyxcbiAgc2l6ZTogJ3NpemUnLFxuICBzaXplczogJ3NpemVzJyxcbiAgc3BhbjogJ3NwYW4nLFxuICBzcGVsbGNoZWNrOiAnc3BlbGxDaGVjaycsXG4gIHNyYzogJ3NyYycsXG4gIHNyY2RvYzogJ3NyY0RvYycsXG4gIHNyY2xhbmc6ICdzcmNMYW5nJyxcbiAgc3Jjc2V0OiAnc3JjU2V0JyxcbiAgc3RhcnQ6ICdzdGFydCcsXG4gIHN0ZXA6ICdzdGVwJyxcbiAgc3R5bGU6ICdzdHlsZScsXG4gIHN1bW1hcnk6ICdzdW1tYXJ5JyxcbiAgdGFiaW5kZXg6ICd0YWJJbmRleCcsXG4gIHRhcmdldDogJ3RhcmdldCcsXG4gIHRpdGxlOiAndGl0bGUnLFxuICB0eXBlOiAndHlwZScsXG4gIHVzZW1hcDogJ3VzZU1hcCcsXG4gIHZhbHVlOiAndmFsdWUnLFxuICB3aWR0aDogJ3dpZHRoJyxcbiAgd21vZGU6ICd3bW9kZScsXG4gIHdyYXA6ICd3cmFwJyxcbiAgLy8gU1ZHXG4gIGFib3V0OiAnYWJvdXQnLFxuICBhY2NlbnRoZWlnaHQ6ICdhY2NlbnRIZWlnaHQnLFxuICAnYWNjZW50LWhlaWdodCc6ICdhY2NlbnRIZWlnaHQnLFxuICBhY2N1bXVsYXRlOiAnYWNjdW11bGF0ZScsXG4gIGFkZGl0aXZlOiAnYWRkaXRpdmUnLFxuICBhbGlnbm1lbnRiYXNlbGluZTogJ2FsaWdubWVudEJhc2VsaW5lJyxcbiAgJ2FsaWdubWVudC1iYXNlbGluZSc6ICdhbGlnbm1lbnRCYXNlbGluZScsXG4gIGFsbG93cmVvcmRlcjogJ2FsbG93UmVvcmRlcicsXG4gIGFscGhhYmV0aWM6ICdhbHBoYWJldGljJyxcbiAgYW1wbGl0dWRlOiAnYW1wbGl0dWRlJyxcbiAgYXJhYmljZm9ybTogJ2FyYWJpY0Zvcm0nLFxuICAnYXJhYmljLWZvcm0nOiAnYXJhYmljRm9ybScsXG4gIGFzY2VudDogJ2FzY2VudCcsXG4gIGF0dHJpYnV0ZW5hbWU6ICdhdHRyaWJ1dGVOYW1lJyxcbiAgYXR0cmlidXRldHlwZTogJ2F0dHJpYnV0ZVR5cGUnLFxuICBhdXRvcmV2ZXJzZTogJ2F1dG9SZXZlcnNlJyxcbiAgYXppbXV0aDogJ2F6aW11dGgnLFxuICBiYXNlZnJlcXVlbmN5OiAnYmFzZUZyZXF1ZW5jeScsXG4gIGJhc2VsaW5lc2hpZnQ6ICdiYXNlbGluZVNoaWZ0JyxcbiAgJ2Jhc2VsaW5lLXNoaWZ0JzogJ2Jhc2VsaW5lU2hpZnQnLFxuICBiYXNlcHJvZmlsZTogJ2Jhc2VQcm9maWxlJyxcbiAgYmJveDogJ2Jib3gnLFxuICBiZWdpbjogJ2JlZ2luJyxcbiAgYmlhczogJ2JpYXMnLFxuICBieTogJ2J5JyxcbiAgY2FsY21vZGU6ICdjYWxjTW9kZScsXG4gIGNhcGhlaWdodDogJ2NhcEhlaWdodCcsXG4gICdjYXAtaGVpZ2h0JzogJ2NhcEhlaWdodCcsXG4gIGNsaXA6ICdjbGlwJyxcbiAgY2xpcHBhdGg6ICdjbGlwUGF0aCcsXG4gICdjbGlwLXBhdGgnOiAnY2xpcFBhdGgnLFxuICBjbGlwcGF0aHVuaXRzOiAnY2xpcFBhdGhVbml0cycsXG4gIGNsaXBydWxlOiAnY2xpcFJ1bGUnLFxuICAnY2xpcC1ydWxlJzogJ2NsaXBSdWxlJyxcbiAgY29sb3I6ICdjb2xvcicsXG4gIGNvbG9yaW50ZXJwb2xhdGlvbjogJ2NvbG9ySW50ZXJwb2xhdGlvbicsXG4gICdjb2xvci1pbnRlcnBvbGF0aW9uJzogJ2NvbG9ySW50ZXJwb2xhdGlvbicsXG4gIGNvbG9yaW50ZXJwb2xhdGlvbmZpbHRlcnM6ICdjb2xvckludGVycG9sYXRpb25GaWx0ZXJzJyxcbiAgJ2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVycyc6ICdjb2xvckludGVycG9sYXRpb25GaWx0ZXJzJyxcbiAgY29sb3Jwcm9maWxlOiAnY29sb3JQcm9maWxlJyxcbiAgJ2NvbG9yLXByb2ZpbGUnOiAnY29sb3JQcm9maWxlJyxcbiAgY29sb3JyZW5kZXJpbmc6ICdjb2xvclJlbmRlcmluZycsXG4gICdjb2xvci1yZW5kZXJpbmcnOiAnY29sb3JSZW5kZXJpbmcnLFxuICBjb250ZW50c2NyaXB0dHlwZTogJ2NvbnRlbnRTY3JpcHRUeXBlJyxcbiAgY29udGVudHN0eWxldHlwZTogJ2NvbnRlbnRTdHlsZVR5cGUnLFxuICBjdXJzb3I6ICdjdXJzb3InLFxuICBjeDogJ2N4JyxcbiAgY3k6ICdjeScsXG4gIGQ6ICdkJyxcbiAgZGF0YXR5cGU6ICdkYXRhdHlwZScsXG4gIGRlY2VsZXJhdGU6ICdkZWNlbGVyYXRlJyxcbiAgZGVzY2VudDogJ2Rlc2NlbnQnLFxuICBkaWZmdXNlY29uc3RhbnQ6ICdkaWZmdXNlQ29uc3RhbnQnLFxuICBkaXJlY3Rpb246ICdkaXJlY3Rpb24nLFxuICBkaXNwbGF5OiAnZGlzcGxheScsXG4gIGRpdmlzb3I6ICdkaXZpc29yJyxcbiAgZG9taW5hbnRiYXNlbGluZTogJ2RvbWluYW50QmFzZWxpbmUnLFxuICAnZG9taW5hbnQtYmFzZWxpbmUnOiAnZG9taW5hbnRCYXNlbGluZScsXG4gIGR1cjogJ2R1cicsXG4gIGR4OiAnZHgnLFxuICBkeTogJ2R5JyxcbiAgZWRnZW1vZGU6ICdlZGdlTW9kZScsXG4gIGVsZXZhdGlvbjogJ2VsZXZhdGlvbicsXG4gIGVuYWJsZWJhY2tncm91bmQ6ICdlbmFibGVCYWNrZ3JvdW5kJyxcbiAgJ2VuYWJsZS1iYWNrZ3JvdW5kJzogJ2VuYWJsZUJhY2tncm91bmQnLFxuICBlbmQ6ICdlbmQnLFxuICBleHBvbmVudDogJ2V4cG9uZW50JyxcbiAgZXh0ZXJuYWxyZXNvdXJjZXNyZXF1aXJlZDogJ2V4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWQnLFxuICBmaWxsOiAnZmlsbCcsXG4gIGZpbGxvcGFjaXR5OiAnZmlsbE9wYWNpdHknLFxuICAnZmlsbC1vcGFjaXR5JzogJ2ZpbGxPcGFjaXR5JyxcbiAgZmlsbHJ1bGU6ICdmaWxsUnVsZScsXG4gICdmaWxsLXJ1bGUnOiAnZmlsbFJ1bGUnLFxuICBmaWx0ZXI6ICdmaWx0ZXInLFxuICBmaWx0ZXJyZXM6ICdmaWx0ZXJSZXMnLFxuICBmaWx0ZXJ1bml0czogJ2ZpbHRlclVuaXRzJyxcbiAgZmxvb2RvcGFjaXR5OiAnZmxvb2RPcGFjaXR5JyxcbiAgJ2Zsb29kLW9wYWNpdHknOiAnZmxvb2RPcGFjaXR5JyxcbiAgZmxvb2Rjb2xvcjogJ2Zsb29kQ29sb3InLFxuICAnZmxvb2QtY29sb3InOiAnZmxvb2RDb2xvcicsXG4gIGZvY3VzYWJsZTogJ2ZvY3VzYWJsZScsXG4gIGZvbnRmYW1pbHk6ICdmb250RmFtaWx5JyxcbiAgJ2ZvbnQtZmFtaWx5JzogJ2ZvbnRGYW1pbHknLFxuICBmb250c2l6ZTogJ2ZvbnRTaXplJyxcbiAgJ2ZvbnQtc2l6ZSc6ICdmb250U2l6ZScsXG4gIGZvbnRzaXplYWRqdXN0OiAnZm9udFNpemVBZGp1c3QnLFxuICAnZm9udC1zaXplLWFkanVzdCc6ICdmb250U2l6ZUFkanVzdCcsXG4gIGZvbnRzdHJldGNoOiAnZm9udFN0cmV0Y2gnLFxuICAnZm9udC1zdHJldGNoJzogJ2ZvbnRTdHJldGNoJyxcbiAgZm9udHN0eWxlOiAnZm9udFN0eWxlJyxcbiAgJ2ZvbnQtc3R5bGUnOiAnZm9udFN0eWxlJyxcbiAgZm9udHZhcmlhbnQ6ICdmb250VmFyaWFudCcsXG4gICdmb250LXZhcmlhbnQnOiAnZm9udFZhcmlhbnQnLFxuICBmb250d2VpZ2h0OiAnZm9udFdlaWdodCcsXG4gICdmb250LXdlaWdodCc6ICdmb250V2VpZ2h0JyxcbiAgZm9ybWF0OiAnZm9ybWF0JyxcbiAgZnJvbTogJ2Zyb20nLFxuICBmeDogJ2Z4JyxcbiAgZnk6ICdmeScsXG4gIGcxOiAnZzEnLFxuICBnMjogJ2cyJyxcbiAgZ2x5cGhuYW1lOiAnZ2x5cGhOYW1lJyxcbiAgJ2dseXBoLW5hbWUnOiAnZ2x5cGhOYW1lJyxcbiAgZ2x5cGhvcmllbnRhdGlvbmhvcml6b250YWw6ICdnbHlwaE9yaWVudGF0aW9uSG9yaXpvbnRhbCcsXG4gICdnbHlwaC1vcmllbnRhdGlvbi1ob3Jpem9udGFsJzogJ2dseXBoT3JpZW50YXRpb25Ib3Jpem9udGFsJyxcbiAgZ2x5cGhvcmllbnRhdGlvbnZlcnRpY2FsOiAnZ2x5cGhPcmllbnRhdGlvblZlcnRpY2FsJyxcbiAgJ2dseXBoLW9yaWVudGF0aW9uLXZlcnRpY2FsJzogJ2dseXBoT3JpZW50YXRpb25WZXJ0aWNhbCcsXG4gIGdseXBocmVmOiAnZ2x5cGhSZWYnLFxuICBncmFkaWVudHRyYW5zZm9ybTogJ2dyYWRpZW50VHJhbnNmb3JtJyxcbiAgZ3JhZGllbnR1bml0czogJ2dyYWRpZW50VW5pdHMnLFxuICBoYW5naW5nOiAnaGFuZ2luZycsXG4gIGhvcml6YWR2eDogJ2hvcml6QWR2WCcsXG4gICdob3Jpei1hZHYteCc6ICdob3JpekFkdlgnLFxuICBob3Jpem9yaWdpbng6ICdob3Jpek9yaWdpblgnLFxuICAnaG9yaXotb3JpZ2luLXgnOiAnaG9yaXpPcmlnaW5YJyxcbiAgaWRlb2dyYXBoaWM6ICdpZGVvZ3JhcGhpYycsXG4gIGltYWdlcmVuZGVyaW5nOiAnaW1hZ2VSZW5kZXJpbmcnLFxuICAnaW1hZ2UtcmVuZGVyaW5nJzogJ2ltYWdlUmVuZGVyaW5nJyxcbiAgaW4yOiAnaW4yJyxcbiAgaW46ICdpbicsXG4gIGlubGlzdDogJ2lubGlzdCcsXG4gIGludGVyY2VwdDogJ2ludGVyY2VwdCcsXG4gIGsxOiAnazEnLFxuICBrMjogJ2syJyxcbiAgazM6ICdrMycsXG4gIGs0OiAnazQnLFxuICBrOiAnaycsXG4gIGtlcm5lbG1hdHJpeDogJ2tlcm5lbE1hdHJpeCcsXG4gIGtlcm5lbHVuaXRsZW5ndGg6ICdrZXJuZWxVbml0TGVuZ3RoJyxcbiAga2VybmluZzogJ2tlcm5pbmcnLFxuICBrZXlwb2ludHM6ICdrZXlQb2ludHMnLFxuICBrZXlzcGxpbmVzOiAna2V5U3BsaW5lcycsXG4gIGtleXRpbWVzOiAna2V5VGltZXMnLFxuICBsZW5ndGhhZGp1c3Q6ICdsZW5ndGhBZGp1c3QnLFxuICBsZXR0ZXJzcGFjaW5nOiAnbGV0dGVyU3BhY2luZycsXG4gICdsZXR0ZXItc3BhY2luZyc6ICdsZXR0ZXJTcGFjaW5nJyxcbiAgbGlnaHRpbmdjb2xvcjogJ2xpZ2h0aW5nQ29sb3InLFxuICAnbGlnaHRpbmctY29sb3InOiAnbGlnaHRpbmdDb2xvcicsXG4gIGxpbWl0aW5nY29uZWFuZ2xlOiAnbGltaXRpbmdDb25lQW5nbGUnLFxuICBsb2NhbDogJ2xvY2FsJyxcbiAgbWFya2VyZW5kOiAnbWFya2VyRW5kJyxcbiAgJ21hcmtlci1lbmQnOiAnbWFya2VyRW5kJyxcbiAgbWFya2VyaGVpZ2h0OiAnbWFya2VySGVpZ2h0JyxcbiAgbWFya2VybWlkOiAnbWFya2VyTWlkJyxcbiAgJ21hcmtlci1taWQnOiAnbWFya2VyTWlkJyxcbiAgbWFya2Vyc3RhcnQ6ICdtYXJrZXJTdGFydCcsXG4gICdtYXJrZXItc3RhcnQnOiAnbWFya2VyU3RhcnQnLFxuICBtYXJrZXJ1bml0czogJ21hcmtlclVuaXRzJyxcbiAgbWFya2Vyd2lkdGg6ICdtYXJrZXJXaWR0aCcsXG4gIG1hc2s6ICdtYXNrJyxcbiAgbWFza2NvbnRlbnR1bml0czogJ21hc2tDb250ZW50VW5pdHMnLFxuICBtYXNrdW5pdHM6ICdtYXNrVW5pdHMnLFxuICBtYXRoZW1hdGljYWw6ICdtYXRoZW1hdGljYWwnLFxuICBtb2RlOiAnbW9kZScsXG4gIG51bW9jdGF2ZXM6ICdudW1PY3RhdmVzJyxcbiAgb2Zmc2V0OiAnb2Zmc2V0JyxcbiAgb3BhY2l0eTogJ29wYWNpdHknLFxuICBvcGVyYXRvcjogJ29wZXJhdG9yJyxcbiAgb3JkZXI6ICdvcmRlcicsXG4gIG9yaWVudDogJ29yaWVudCcsXG4gIG9yaWVudGF0aW9uOiAnb3JpZW50YXRpb24nLFxuICBvcmlnaW46ICdvcmlnaW4nLFxuICBvdmVyZmxvdzogJ292ZXJmbG93JyxcbiAgb3ZlcmxpbmVwb3NpdGlvbjogJ292ZXJsaW5lUG9zaXRpb24nLFxuICAnb3ZlcmxpbmUtcG9zaXRpb24nOiAnb3ZlcmxpbmVQb3NpdGlvbicsXG4gIG92ZXJsaW5ldGhpY2tuZXNzOiAnb3ZlcmxpbmVUaGlja25lc3MnLFxuICAnb3ZlcmxpbmUtdGhpY2tuZXNzJzogJ292ZXJsaW5lVGhpY2tuZXNzJyxcbiAgcGFpbnRvcmRlcjogJ3BhaW50T3JkZXInLFxuICAncGFpbnQtb3JkZXInOiAncGFpbnRPcmRlcicsXG4gIHBhbm9zZTE6ICdwYW5vc2UxJyxcbiAgJ3Bhbm9zZS0xJzogJ3Bhbm9zZTEnLFxuICBwYXRobGVuZ3RoOiAncGF0aExlbmd0aCcsXG4gIHBhdHRlcm5jb250ZW50dW5pdHM6ICdwYXR0ZXJuQ29udGVudFVuaXRzJyxcbiAgcGF0dGVybnRyYW5zZm9ybTogJ3BhdHRlcm5UcmFuc2Zvcm0nLFxuICBwYXR0ZXJudW5pdHM6ICdwYXR0ZXJuVW5pdHMnLFxuICBwb2ludGVyZXZlbnRzOiAncG9pbnRlckV2ZW50cycsXG4gICdwb2ludGVyLWV2ZW50cyc6ICdwb2ludGVyRXZlbnRzJyxcbiAgcG9pbnRzOiAncG9pbnRzJyxcbiAgcG9pbnRzYXR4OiAncG9pbnRzQXRYJyxcbiAgcG9pbnRzYXR5OiAncG9pbnRzQXRZJyxcbiAgcG9pbnRzYXR6OiAncG9pbnRzQXRaJyxcbiAgcHJlZml4OiAncHJlZml4JyxcbiAgcHJlc2VydmVhbHBoYTogJ3ByZXNlcnZlQWxwaGEnLFxuICBwcmVzZXJ2ZWFzcGVjdHJhdGlvOiAncHJlc2VydmVBc3BlY3RSYXRpbycsXG4gIHByaW1pdGl2ZXVuaXRzOiAncHJpbWl0aXZlVW5pdHMnLFxuICBwcm9wZXJ0eTogJ3Byb3BlcnR5JyxcbiAgcjogJ3InLFxuICByYWRpdXM6ICdyYWRpdXMnLFxuICByZWZ4OiAncmVmWCcsXG4gIHJlZnk6ICdyZWZZJyxcbiAgcmVuZGVyaW5naW50ZW50OiAncmVuZGVyaW5nSW50ZW50JyxcbiAgJ3JlbmRlcmluZy1pbnRlbnQnOiAncmVuZGVyaW5nSW50ZW50JyxcbiAgcmVwZWF0Y291bnQ6ICdyZXBlYXRDb3VudCcsXG4gIHJlcGVhdGR1cjogJ3JlcGVhdER1cicsXG4gIHJlcXVpcmVkZXh0ZW5zaW9uczogJ3JlcXVpcmVkRXh0ZW5zaW9ucycsXG4gIHJlcXVpcmVkZmVhdHVyZXM6ICdyZXF1aXJlZEZlYXR1cmVzJyxcbiAgcmVzb3VyY2U6ICdyZXNvdXJjZScsXG4gIHJlc3RhcnQ6ICdyZXN0YXJ0JyxcbiAgcmVzdWx0OiAncmVzdWx0JyxcbiAgcmVzdWx0czogJ3Jlc3VsdHMnLFxuICByb3RhdGU6ICdyb3RhdGUnLFxuICByeDogJ3J4JyxcbiAgcnk6ICdyeScsXG4gIHNjYWxlOiAnc2NhbGUnLFxuICBzZWN1cml0eTogJ3NlY3VyaXR5JyxcbiAgc2VlZDogJ3NlZWQnLFxuICBzaGFwZXJlbmRlcmluZzogJ3NoYXBlUmVuZGVyaW5nJyxcbiAgJ3NoYXBlLXJlbmRlcmluZyc6ICdzaGFwZVJlbmRlcmluZycsXG4gIHNsb3BlOiAnc2xvcGUnLFxuICBzcGFjaW5nOiAnc3BhY2luZycsXG4gIHNwZWN1bGFyY29uc3RhbnQ6ICdzcGVjdWxhckNvbnN0YW50JyxcbiAgc3BlY3VsYXJleHBvbmVudDogJ3NwZWN1bGFyRXhwb25lbnQnLFxuICBzcGVlZDogJ3NwZWVkJyxcbiAgc3ByZWFkbWV0aG9kOiAnc3ByZWFkTWV0aG9kJyxcbiAgc3RhcnRvZmZzZXQ6ICdzdGFydE9mZnNldCcsXG4gIHN0ZGRldmlhdGlvbjogJ3N0ZERldmlhdGlvbicsXG4gIHN0ZW1oOiAnc3RlbWgnLFxuICBzdGVtdjogJ3N0ZW12JyxcbiAgc3RpdGNodGlsZXM6ICdzdGl0Y2hUaWxlcycsXG4gIHN0b3Bjb2xvcjogJ3N0b3BDb2xvcicsXG4gICdzdG9wLWNvbG9yJzogJ3N0b3BDb2xvcicsXG4gIHN0b3BvcGFjaXR5OiAnc3RvcE9wYWNpdHknLFxuICAnc3RvcC1vcGFjaXR5JzogJ3N0b3BPcGFjaXR5JyxcbiAgc3RyaWtldGhyb3VnaHBvc2l0aW9uOiAnc3RyaWtldGhyb3VnaFBvc2l0aW9uJyxcbiAgJ3N0cmlrZXRocm91Z2gtcG9zaXRpb24nOiAnc3RyaWtldGhyb3VnaFBvc2l0aW9uJyxcbiAgc3RyaWtldGhyb3VnaHRoaWNrbmVzczogJ3N0cmlrZXRocm91Z2hUaGlja25lc3MnLFxuICAnc3RyaWtldGhyb3VnaC10aGlja25lc3MnOiAnc3RyaWtldGhyb3VnaFRoaWNrbmVzcycsXG4gIHN0cmluZzogJ3N0cmluZycsXG4gIHN0cm9rZTogJ3N0cm9rZScsXG4gIHN0cm9rZWRhc2hhcnJheTogJ3N0cm9rZURhc2hhcnJheScsXG4gICdzdHJva2UtZGFzaGFycmF5JzogJ3N0cm9rZURhc2hhcnJheScsXG4gIHN0cm9rZWRhc2hvZmZzZXQ6ICdzdHJva2VEYXNob2Zmc2V0JyxcbiAgJ3N0cm9rZS1kYXNob2Zmc2V0JzogJ3N0cm9rZURhc2hvZmZzZXQnLFxuICBzdHJva2VsaW5lY2FwOiAnc3Ryb2tlTGluZWNhcCcsXG4gICdzdHJva2UtbGluZWNhcCc6ICdzdHJva2VMaW5lY2FwJyxcbiAgc3Ryb2tlbGluZWpvaW46ICdzdHJva2VMaW5lam9pbicsXG4gICdzdHJva2UtbGluZWpvaW4nOiAnc3Ryb2tlTGluZWpvaW4nLFxuICBzdHJva2VtaXRlcmxpbWl0OiAnc3Ryb2tlTWl0ZXJsaW1pdCcsXG4gICdzdHJva2UtbWl0ZXJsaW1pdCc6ICdzdHJva2VNaXRlcmxpbWl0JyxcbiAgc3Ryb2tld2lkdGg6ICdzdHJva2VXaWR0aCcsXG4gICdzdHJva2Utd2lkdGgnOiAnc3Ryb2tlV2lkdGgnLFxuICBzdHJva2VvcGFjaXR5OiAnc3Ryb2tlT3BhY2l0eScsXG4gICdzdHJva2Utb3BhY2l0eSc6ICdzdHJva2VPcGFjaXR5JyxcbiAgc3VwcHJlc3Njb250ZW50ZWRpdGFibGV3YXJuaW5nOiAnc3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nJyxcbiAgc3VwcHJlc3NoeWRyYXRpb253YXJuaW5nOiAnc3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nJyxcbiAgc3VyZmFjZXNjYWxlOiAnc3VyZmFjZVNjYWxlJyxcbiAgc3lzdGVtbGFuZ3VhZ2U6ICdzeXN0ZW1MYW5ndWFnZScsXG4gIHRhYmxldmFsdWVzOiAndGFibGVWYWx1ZXMnLFxuICB0YXJnZXR4OiAndGFyZ2V0WCcsXG4gIHRhcmdldHk6ICd0YXJnZXRZJyxcbiAgdGV4dGFuY2hvcjogJ3RleHRBbmNob3InLFxuICAndGV4dC1hbmNob3InOiAndGV4dEFuY2hvcicsXG4gIHRleHRkZWNvcmF0aW9uOiAndGV4dERlY29yYXRpb24nLFxuICAndGV4dC1kZWNvcmF0aW9uJzogJ3RleHREZWNvcmF0aW9uJyxcbiAgdGV4dGxlbmd0aDogJ3RleHRMZW5ndGgnLFxuICB0ZXh0cmVuZGVyaW5nOiAndGV4dFJlbmRlcmluZycsXG4gICd0ZXh0LXJlbmRlcmluZyc6ICd0ZXh0UmVuZGVyaW5nJyxcbiAgdG86ICd0bycsXG4gIHRyYW5zZm9ybTogJ3RyYW5zZm9ybScsXG4gIHR5cGVvZjogJ3R5cGVvZicsXG4gIHUxOiAndTEnLFxuICB1MjogJ3UyJyxcbiAgdW5kZXJsaW5lcG9zaXRpb246ICd1bmRlcmxpbmVQb3NpdGlvbicsXG4gICd1bmRlcmxpbmUtcG9zaXRpb24nOiAndW5kZXJsaW5lUG9zaXRpb24nLFxuICB1bmRlcmxpbmV0aGlja25lc3M6ICd1bmRlcmxpbmVUaGlja25lc3MnLFxuICAndW5kZXJsaW5lLXRoaWNrbmVzcyc6ICd1bmRlcmxpbmVUaGlja25lc3MnLFxuICB1bmljb2RlOiAndW5pY29kZScsXG4gIHVuaWNvZGViaWRpOiAndW5pY29kZUJpZGknLFxuICAndW5pY29kZS1iaWRpJzogJ3VuaWNvZGVCaWRpJyxcbiAgdW5pY29kZXJhbmdlOiAndW5pY29kZVJhbmdlJyxcbiAgJ3VuaWNvZGUtcmFuZ2UnOiAndW5pY29kZVJhbmdlJyxcbiAgdW5pdHNwZXJlbTogJ3VuaXRzUGVyRW0nLFxuICAndW5pdHMtcGVyLWVtJzogJ3VuaXRzUGVyRW0nLFxuICB1bnNlbGVjdGFibGU6ICd1bnNlbGVjdGFibGUnLFxuICB2YWxwaGFiZXRpYzogJ3ZBbHBoYWJldGljJyxcbiAgJ3YtYWxwaGFiZXRpYyc6ICd2QWxwaGFiZXRpYycsXG4gIHZhbHVlczogJ3ZhbHVlcycsXG4gIHZlY3RvcmVmZmVjdDogJ3ZlY3RvckVmZmVjdCcsXG4gICd2ZWN0b3ItZWZmZWN0JzogJ3ZlY3RvckVmZmVjdCcsXG4gIHZlcnNpb246ICd2ZXJzaW9uJyxcbiAgdmVydGFkdnk6ICd2ZXJ0QWR2WScsXG4gICd2ZXJ0LWFkdi15JzogJ3ZlcnRBZHZZJyxcbiAgdmVydG9yaWdpbng6ICd2ZXJ0T3JpZ2luWCcsXG4gICd2ZXJ0LW9yaWdpbi14JzogJ3ZlcnRPcmlnaW5YJyxcbiAgdmVydG9yaWdpbnk6ICd2ZXJ0T3JpZ2luWScsXG4gICd2ZXJ0LW9yaWdpbi15JzogJ3ZlcnRPcmlnaW5ZJyxcbiAgdmhhbmdpbmc6ICd2SGFuZ2luZycsXG4gICd2LWhhbmdpbmcnOiAndkhhbmdpbmcnLFxuICB2aWRlb2dyYXBoaWM6ICd2SWRlb2dyYXBoaWMnLFxuICAndi1pZGVvZ3JhcGhpYyc6ICd2SWRlb2dyYXBoaWMnLFxuICB2aWV3Ym94OiAndmlld0JveCcsXG4gIHZpZXd0YXJnZXQ6ICd2aWV3VGFyZ2V0JyxcbiAgdmlzaWJpbGl0eTogJ3Zpc2liaWxpdHknLFxuICB2bWF0aGVtYXRpY2FsOiAndk1hdGhlbWF0aWNhbCcsXG4gICd2LW1hdGhlbWF0aWNhbCc6ICd2TWF0aGVtYXRpY2FsJyxcbiAgdm9jYWI6ICd2b2NhYicsXG4gIHdpZHRoczogJ3dpZHRocycsXG4gIHdvcmRzcGFjaW5nOiAnd29yZFNwYWNpbmcnLFxuICAnd29yZC1zcGFjaW5nJzogJ3dvcmRTcGFjaW5nJyxcbiAgd3JpdGluZ21vZGU6ICd3cml0aW5nTW9kZScsXG4gICd3cml0aW5nLW1vZGUnOiAnd3JpdGluZ01vZGUnLFxuICB4MTogJ3gxJyxcbiAgeDI6ICd4MicsXG4gIHg6ICd4JyxcbiAgeGNoYW5uZWxzZWxlY3RvcjogJ3hDaGFubmVsU2VsZWN0b3InLFxuICB4aGVpZ2h0OiAneEhlaWdodCcsXG4gICd4LWhlaWdodCc6ICd4SGVpZ2h0JyxcbiAgeGxpbmthY3R1YXRlOiAneGxpbmtBY3R1YXRlJyxcbiAgJ3hsaW5rOmFjdHVhdGUnOiAneGxpbmtBY3R1YXRlJyxcbiAgeGxpbmthcmNyb2xlOiAneGxpbmtBcmNyb2xlJyxcbiAgJ3hsaW5rOmFyY3JvbGUnOiAneGxpbmtBcmNyb2xlJyxcbiAgeGxpbmtocmVmOiAneGxpbmtIcmVmJyxcbiAgJ3hsaW5rOmhyZWYnOiAneGxpbmtIcmVmJyxcbiAgeGxpbmtyb2xlOiAneGxpbmtSb2xlJyxcbiAgJ3hsaW5rOnJvbGUnOiAneGxpbmtSb2xlJyxcbiAgeGxpbmtzaG93OiAneGxpbmtTaG93JyxcbiAgJ3hsaW5rOnNob3cnOiAneGxpbmtTaG93JyxcbiAgeGxpbmt0aXRsZTogJ3hsaW5rVGl0bGUnLFxuICAneGxpbms6dGl0bGUnOiAneGxpbmtUaXRsZScsXG4gIHhsaW5rdHlwZTogJ3hsaW5rVHlwZScsXG4gICd4bGluazp0eXBlJzogJ3hsaW5rVHlwZScsXG4gIHhtbGJhc2U6ICd4bWxCYXNlJyxcbiAgJ3htbDpiYXNlJzogJ3htbEJhc2UnLFxuICB4bWxsYW5nOiAneG1sTGFuZycsXG4gICd4bWw6bGFuZyc6ICd4bWxMYW5nJyxcbiAgeG1sbnM6ICd4bWxucycsXG4gICd4bWw6c3BhY2UnOiAneG1sU3BhY2UnLFxuICB4bWxuc3hsaW5rOiAneG1sbnNYbGluaycsXG4gICd4bWxuczp4bGluayc6ICd4bWxuc1hsaW5rJyxcbiAgeG1sc3BhY2U6ICd4bWxTcGFjZScsXG4gIHkxOiAneTEnLFxuICB5MjogJ3kyJyxcbiAgeTogJ3knLFxuICB5Y2hhbm5lbHNlbGVjdG9yOiAneUNoYW5uZWxTZWxlY3RvcicsXG4gIHo6ICd6JyxcbiAgem9vbWFuZHBhbjogJ3pvb21BbmRQYW4nXG59O1xuXG52YXIgdmFsaWRhdGVQcm9wZXJ0eSQxID0gZnVuY3Rpb24gKCkge307XG5cbntcbiAgdmFyIHdhcm5lZFByb3BlcnRpZXMkMSA9IHt9O1xuICB2YXIgX2hhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIEVWRU5UX05BTUVfUkVHRVggPSAvXm9uLi87XG4gIHZhciBJTlZBTElEX0VWRU5UX05BTUVfUkVHRVggPSAvXm9uW15BLVpdLztcbiAgdmFyIHJBUklBJDEgPSBuZXcgUmVnRXhwKCdeKGFyaWEpLVsnICsgQVRUUklCVVRFX05BTUVfQ0hBUiArICddKiQnKTtcbiAgdmFyIHJBUklBQ2FtZWwkMSA9IG5ldyBSZWdFeHAoJ14oYXJpYSlbQS1aXVsnICsgQVRUUklCVVRFX05BTUVfQ0hBUiArICddKiQnKTtcblxuICB2YWxpZGF0ZVByb3BlcnR5JDEgPSBmdW5jdGlvbiAodGFnTmFtZSwgbmFtZSwgdmFsdWUsIGNhblVzZUV2ZW50U3lzdGVtKSB7XG4gICAgaWYgKF9oYXNPd25Qcm9wZXJ0eS5jYWxsKHdhcm5lZFByb3BlcnRpZXMkMSwgbmFtZSkgJiYgd2FybmVkUHJvcGVydGllcyQxW25hbWVdKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgbG93ZXJDYXNlZE5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAobG93ZXJDYXNlZE5hbWUgPT09ICdvbmZvY3VzaW4nIHx8IGxvd2VyQ2FzZWROYW1lID09PSAnb25mb2N1c291dCcpIHtcbiAgICAgIGVycm9yKCdSZWFjdCB1c2VzIG9uRm9jdXMgYW5kIG9uQmx1ciBpbnN0ZWFkIG9mIG9uRm9jdXNJbiBhbmQgb25Gb2N1c091dC4gJyArICdBbGwgUmVhY3QgZXZlbnRzIGFyZSBub3JtYWxpemVkIHRvIGJ1YmJsZSwgc28gb25Gb2N1c0luIGFuZCBvbkZvY3VzT3V0ICcgKyAnYXJlIG5vdCBuZWVkZWQvc3VwcG9ydGVkIGJ5IFJlYWN0LicpO1xuXG4gICAgICB3YXJuZWRQcm9wZXJ0aWVzJDFbbmFtZV0gPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSAvLyBXZSBjYW4ndCByZWx5IG9uIHRoZSBldmVudCBzeXN0ZW0gYmVpbmcgaW5qZWN0ZWQgb24gdGhlIHNlcnZlci5cblxuXG4gICAgaWYgKGNhblVzZUV2ZW50U3lzdGVtKSB7XG4gICAgICBpZiAocmVnaXN0cmF0aW9uTmFtZU1vZHVsZXMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWdpc3RyYXRpb25OYW1lID0gcG9zc2libGVSZWdpc3RyYXRpb25OYW1lcy5oYXNPd25Qcm9wZXJ0eShsb3dlckNhc2VkTmFtZSkgPyBwb3NzaWJsZVJlZ2lzdHJhdGlvbk5hbWVzW2xvd2VyQ2FzZWROYW1lXSA6IG51bGw7XG5cbiAgICAgIGlmIChyZWdpc3RyYXRpb25OYW1lICE9IG51bGwpIHtcbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgZXZlbnQgaGFuZGxlciBwcm9wZXJ0eSBgJXNgLiBEaWQgeW91IG1lYW4gYCVzYD8nLCBuYW1lLCByZWdpc3RyYXRpb25OYW1lKTtcblxuICAgICAgICB3YXJuZWRQcm9wZXJ0aWVzJDFbbmFtZV0gPSB0cnVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKEVWRU5UX05BTUVfUkVHRVgudGVzdChuYW1lKSkge1xuICAgICAgICBlcnJvcignVW5rbm93biBldmVudCBoYW5kbGVyIHByb3BlcnR5IGAlc2AuIEl0IHdpbGwgYmUgaWdub3JlZC4nLCBuYW1lKTtcblxuICAgICAgICB3YXJuZWRQcm9wZXJ0aWVzJDFbbmFtZV0gPSB0cnVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKEVWRU5UX05BTUVfUkVHRVgudGVzdChuYW1lKSkge1xuICAgICAgLy8gSWYgbm8gZXZlbnQgcGx1Z2lucyBoYXZlIGJlZW4gaW5qZWN0ZWQsIHdlIGFyZSBpbiBhIHNlcnZlciBlbnZpcm9ubWVudC5cbiAgICAgIC8vIFNvIHdlIGNhbid0IHRlbGwgaWYgdGhlIGV2ZW50IG5hbWUgaXMgY29ycmVjdCBmb3Igc3VyZSwgYnV0IHdlIGNhbiBmaWx0ZXJcbiAgICAgIC8vIG91dCBrbm93biBiYWQgb25lcyBsaWtlIGBvbmNsaWNrYC4gV2UgY2FuJ3Qgc3VnZ2VzdCBhIHNwZWNpZmljIHJlcGxhY2VtZW50IHRob3VnaC5cbiAgICAgIGlmIChJTlZBTElEX0VWRU5UX05BTUVfUkVHRVgudGVzdChuYW1lKSkge1xuICAgICAgICBlcnJvcignSW52YWxpZCBldmVudCBoYW5kbGVyIHByb3BlcnR5IGAlc2AuICcgKyAnUmVhY3QgZXZlbnRzIHVzZSB0aGUgY2FtZWxDYXNlIG5hbWluZyBjb252ZW50aW9uLCBmb3IgZXhhbXBsZSBgb25DbGlja2AuJywgbmFtZSk7XG4gICAgICB9XG5cbiAgICAgIHdhcm5lZFByb3BlcnRpZXMkMVtuYW1lXSA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IC8vIExldCB0aGUgQVJJQSBhdHRyaWJ1dGUgaG9vayB2YWxpZGF0ZSBBUklBIGF0dHJpYnV0ZXNcblxuXG4gICAgaWYgKHJBUklBJDEudGVzdChuYW1lKSB8fCByQVJJQUNhbWVsJDEudGVzdChuYW1lKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGxvd2VyQ2FzZWROYW1lID09PSAnaW5uZXJodG1sJykge1xuICAgICAgZXJyb3IoJ0RpcmVjdGx5IHNldHRpbmcgcHJvcGVydHkgYGlubmVySFRNTGAgaXMgbm90IHBlcm1pdHRlZC4gJyArICdGb3IgbW9yZSBpbmZvcm1hdGlvbiwgbG9va3VwIGRvY3VtZW50YXRpb24gb24gYGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MYC4nKTtcblxuICAgICAgd2FybmVkUHJvcGVydGllcyQxW25hbWVdID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChsb3dlckNhc2VkTmFtZSA9PT0gJ2FyaWEnKSB7XG4gICAgICBlcnJvcignVGhlIGBhcmlhYCBhdHRyaWJ1dGUgaXMgcmVzZXJ2ZWQgZm9yIGZ1dHVyZSB1c2UgaW4gUmVhY3QuICcgKyAnUGFzcyBpbmRpdmlkdWFsIGBhcmlhLWAgYXR0cmlidXRlcyBpbnN0ZWFkLicpO1xuXG4gICAgICB3YXJuZWRQcm9wZXJ0aWVzJDFbbmFtZV0gPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGxvd2VyQ2FzZWROYW1lID09PSAnaXMnICYmIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGEgYCVzYCBmb3IgYSBzdHJpbmcgYXR0cmlidXRlIGBpc2AuIElmIHRoaXMgaXMgZXhwZWN0ZWQsIGNhc3QgJyArICd0aGUgdmFsdWUgdG8gYSBzdHJpbmcuJywgdHlwZW9mIHZhbHVlKTtcblxuICAgICAgd2FybmVkUHJvcGVydGllcyQxW25hbWVdID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIGlzTmFOKHZhbHVlKSkge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIE5hTiBmb3IgdGhlIGAlc2AgYXR0cmlidXRlLiBJZiB0aGlzIGlzIGV4cGVjdGVkLCBjYXN0ICcgKyAndGhlIHZhbHVlIHRvIGEgc3RyaW5nLicsIG5hbWUpO1xuXG4gICAgICB3YXJuZWRQcm9wZXJ0aWVzJDFbbmFtZV0gPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdmFyIHByb3BlcnR5SW5mbyA9IGdldFByb3BlcnR5SW5mbyhuYW1lKTtcbiAgICB2YXIgaXNSZXNlcnZlZCA9IHByb3BlcnR5SW5mbyAhPT0gbnVsbCAmJiBwcm9wZXJ0eUluZm8udHlwZSA9PT0gUkVTRVJWRUQ7IC8vIEtub3duIGF0dHJpYnV0ZXMgc2hvdWxkIG1hdGNoIHRoZSBjYXNpbmcgc3BlY2lmaWVkIGluIHRoZSBwcm9wZXJ0eSBjb25maWcuXG5cbiAgICBpZiAocG9zc2libGVTdGFuZGFyZE5hbWVzLmhhc093blByb3BlcnR5KGxvd2VyQ2FzZWROYW1lKSkge1xuICAgICAgdmFyIHN0YW5kYXJkTmFtZSA9IHBvc3NpYmxlU3RhbmRhcmROYW1lc1tsb3dlckNhc2VkTmFtZV07XG5cbiAgICAgIGlmIChzdGFuZGFyZE5hbWUgIT09IG5hbWUpIHtcbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgRE9NIHByb3BlcnR5IGAlc2AuIERpZCB5b3UgbWVhbiBgJXNgPycsIG5hbWUsIHN0YW5kYXJkTmFtZSk7XG5cbiAgICAgICAgd2FybmVkUHJvcGVydGllcyQxW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghaXNSZXNlcnZlZCAmJiBuYW1lICE9PSBsb3dlckNhc2VkTmFtZSkge1xuICAgICAgLy8gVW5rbm93biBhdHRyaWJ1dGVzIHNob3VsZCBoYXZlIGxvd2VyY2FzZSBjYXNpbmcgc2luY2UgdGhhdCdzIGhvdyB0aGV5XG4gICAgICAvLyB3aWxsIGJlIGNhc2VkIGFueXdheSB3aXRoIHNlcnZlciByZW5kZXJpbmcuXG4gICAgICBlcnJvcignUmVhY3QgZG9lcyBub3QgcmVjb2duaXplIHRoZSBgJXNgIHByb3Agb24gYSBET00gZWxlbWVudC4gSWYgeW91ICcgKyAnaW50ZW50aW9uYWxseSB3YW50IGl0IHRvIGFwcGVhciBpbiB0aGUgRE9NIGFzIGEgY3VzdG9tICcgKyAnYXR0cmlidXRlLCBzcGVsbCBpdCBhcyBsb3dlcmNhc2UgYCVzYCBpbnN0ZWFkLiAnICsgJ0lmIHlvdSBhY2NpZGVudGFsbHkgcGFzc2VkIGl0IGZyb20gYSBwYXJlbnQgY29tcG9uZW50LCByZW1vdmUgJyArICdpdCBmcm9tIHRoZSBET00gZWxlbWVudC4nLCBuYW1lLCBsb3dlckNhc2VkTmFtZSk7XG5cbiAgICAgIHdhcm5lZFByb3BlcnRpZXMkMVtuYW1lXSA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgJiYgc2hvdWxkUmVtb3ZlQXR0cmlidXRlV2l0aFdhcm5pbmcobmFtZSwgdmFsdWUsIHByb3BlcnR5SW5mbywgZmFsc2UpKSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgZXJyb3IoJ1JlY2VpdmVkIGAlc2AgZm9yIGEgbm9uLWJvb2xlYW4gYXR0cmlidXRlIGAlc2AuXFxuXFxuJyArICdJZiB5b3Ugd2FudCB0byB3cml0ZSBpdCB0byB0aGUgRE9NLCBwYXNzIGEgc3RyaW5nIGluc3RlYWQ6ICcgKyAnJXM9XCIlc1wiIG9yICVzPXt2YWx1ZS50b1N0cmluZygpfS4nLCB2YWx1ZSwgbmFtZSwgbmFtZSwgdmFsdWUsIG5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3IoJ1JlY2VpdmVkIGAlc2AgZm9yIGEgbm9uLWJvb2xlYW4gYXR0cmlidXRlIGAlc2AuXFxuXFxuJyArICdJZiB5b3Ugd2FudCB0byB3cml0ZSBpdCB0byB0aGUgRE9NLCBwYXNzIGEgc3RyaW5nIGluc3RlYWQ6ICcgKyAnJXM9XCIlc1wiIG9yICVzPXt2YWx1ZS50b1N0cmluZygpfS5cXG5cXG4nICsgJ0lmIHlvdSB1c2VkIHRvIGNvbmRpdGlvbmFsbHkgb21pdCBpdCB3aXRoICVzPXtjb25kaXRpb24gJiYgdmFsdWV9LCAnICsgJ3Bhc3MgJXM9e2NvbmRpdGlvbiA/IHZhbHVlIDogdW5kZWZpbmVkfSBpbnN0ZWFkLicsIHZhbHVlLCBuYW1lLCBuYW1lLCB2YWx1ZSwgbmFtZSwgbmFtZSwgbmFtZSk7XG4gICAgICB9XG5cbiAgICAgIHdhcm5lZFByb3BlcnRpZXMkMVtuYW1lXSA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IC8vIE5vdyB0aGF0IHdlJ3ZlIHZhbGlkYXRlZCBjYXNpbmcsIGRvIG5vdCB2YWxpZGF0ZVxuICAgIC8vIGRhdGEgdHlwZXMgZm9yIHJlc2VydmVkIHByb3BzXG5cblxuICAgIGlmIChpc1Jlc2VydmVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IC8vIFdhcm4gd2hlbiBhIGtub3duIGF0dHJpYnV0ZSBpcyBhIGJhZCB0eXBlXG5cblxuICAgIGlmIChzaG91bGRSZW1vdmVBdHRyaWJ1dGVXaXRoV2FybmluZyhuYW1lLCB2YWx1ZSwgcHJvcGVydHlJbmZvLCBmYWxzZSkpIHtcbiAgICAgIHdhcm5lZFByb3BlcnRpZXMkMVtuYW1lXSA9IHRydWU7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAvLyBXYXJuIHdoZW4gcGFzc2luZyB0aGUgc3RyaW5ncyAnZmFsc2UnIG9yICd0cnVlJyBpbnRvIGEgYm9vbGVhbiBwcm9wXG5cblxuICAgIGlmICgodmFsdWUgPT09ICdmYWxzZScgfHwgdmFsdWUgPT09ICd0cnVlJykgJiYgcHJvcGVydHlJbmZvICE9PSBudWxsICYmIHByb3BlcnR5SW5mby50eXBlID09PSBCT09MRUFOKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgdGhlIHN0cmluZyBgJXNgIGZvciB0aGUgYm9vbGVhbiBhdHRyaWJ1dGUgYCVzYC4gJyArICclcyAnICsgJ0RpZCB5b3UgbWVhbiAlcz17JXN9PycsIHZhbHVlLCBuYW1lLCB2YWx1ZSA9PT0gJ2ZhbHNlJyA/ICdUaGUgYnJvd3NlciB3aWxsIGludGVycHJldCBpdCBhcyBhIHRydXRoeSB2YWx1ZS4nIDogJ0FsdGhvdWdoIHRoaXMgd29ya3MsIGl0IHdpbGwgbm90IHdvcmsgYXMgZXhwZWN0ZWQgaWYgeW91IHBhc3MgdGhlIHN0cmluZyBcImZhbHNlXCIuJywgbmFtZSwgdmFsdWUpO1xuXG4gICAgICB3YXJuZWRQcm9wZXJ0aWVzJDFbbmFtZV0gPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG59XG5cbnZhciB3YXJuVW5rbm93blByb3BlcnRpZXMgPSBmdW5jdGlvbiAodHlwZSwgcHJvcHMsIGNhblVzZUV2ZW50U3lzdGVtKSB7XG4gIHtcbiAgICB2YXIgdW5rbm93blByb3BzID0gW107XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgIHZhciBpc1ZhbGlkID0gdmFsaWRhdGVQcm9wZXJ0eSQxKHR5cGUsIGtleSwgcHJvcHNba2V5XSwgY2FuVXNlRXZlbnRTeXN0ZW0pO1xuXG4gICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgdW5rbm93blByb3BzLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgdW5rbm93blByb3BTdHJpbmcgPSB1bmtub3duUHJvcHMubWFwKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICByZXR1cm4gJ2AnICsgcHJvcCArICdgJztcbiAgICB9KS5qb2luKCcsICcpO1xuXG4gICAgaWYgKHVua25vd25Qcm9wcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGVycm9yKCdJbnZhbGlkIHZhbHVlIGZvciBwcm9wICVzIG9uIDwlcz4gdGFnLiBFaXRoZXIgcmVtb3ZlIGl0IGZyb20gdGhlIGVsZW1lbnQsICcgKyAnb3IgcGFzcyBhIHN0cmluZyBvciBudW1iZXIgdmFsdWUgdG8ga2VlcCBpdCBpbiB0aGUgRE9NLiAnICsgJ0ZvciBkZXRhaWxzLCBzZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC1hdHRyaWJ1dGUtYmVoYXZpb3InLCB1bmtub3duUHJvcFN0cmluZywgdHlwZSk7XG4gICAgfSBlbHNlIGlmICh1bmtub3duUHJvcHMubGVuZ3RoID4gMSkge1xuICAgICAgZXJyb3IoJ0ludmFsaWQgdmFsdWVzIGZvciBwcm9wcyAlcyBvbiA8JXM+IHRhZy4gRWl0aGVyIHJlbW92ZSB0aGVtIGZyb20gdGhlIGVsZW1lbnQsICcgKyAnb3IgcGFzcyBhIHN0cmluZyBvciBudW1iZXIgdmFsdWUgdG8ga2VlcCB0aGVtIGluIHRoZSBET00uICcgKyAnRm9yIGRldGFpbHMsIHNlZSBodHRwczovL2ZiLm1lL3JlYWN0LWF0dHJpYnV0ZS1iZWhhdmlvcicsIHVua25vd25Qcm9wU3RyaW5nLCB0eXBlKTtcbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcGVydGllcyQyKHR5cGUsIHByb3BzLCBjYW5Vc2VFdmVudFN5c3RlbSkge1xuICBpZiAoaXNDdXN0b21Db21wb25lbnQodHlwZSwgcHJvcHMpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgd2FyblVua25vd25Qcm9wZXJ0aWVzKHR5cGUsIHByb3BzLCBjYW5Vc2VFdmVudFN5c3RlbSk7XG59XG5cbnZhciB0b0FycmF5ID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheTsgLy8gVGhpcyBpcyBvbmx5IHVzZWQgaW4gREVWLlxuLy8gRWFjaCBlbnRyeSBpcyBgdGhpcy5zdGFja2AgZnJvbSBhIGN1cnJlbnRseSBleGVjdXRpbmcgcmVuZGVyZXIgaW5zdGFuY2UuXG4vLyAoVGhlcmUgbWF5IGJlIG1vcmUgdGhhbiBvbmUgYmVjYXVzZSBSZWFjdERPTVNlcnZlciBpcyByZWVudHJhbnQpLlxuLy8gRWFjaCBzdGFjayBpcyBhbiBhcnJheSBvZiBmcmFtZXMgd2hpY2ggbWF5IGNvbnRhaW4gbmVzdGVkIHN0YWNrcyBvZiBlbGVtZW50cy5cblxudmFyIGN1cnJlbnREZWJ1Z1N0YWNrcyA9IFtdO1xudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkNDtcbnZhciBwcmV2R2V0Q3VycmVudFN0YWNrSW1wbCA9IG51bGw7XG5cbnZhciBnZXRDdXJyZW50U2VydmVyU3RhY2tJbXBsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJyc7XG59O1xuXG52YXIgZGVzY3JpYmVTdGFja0ZyYW1lID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgcmV0dXJuICcnO1xufTtcblxudmFyIHZhbGlkYXRlUHJvcGVydGllc0luRGV2ZWxvcG1lbnQgPSBmdW5jdGlvbiAodHlwZSwgcHJvcHMpIHt9O1xuXG52YXIgcHVzaEN1cnJlbnREZWJ1Z1N0YWNrID0gZnVuY3Rpb24gKHN0YWNrKSB7fTtcblxudmFyIHB1c2hFbGVtZW50VG9EZWJ1Z1N0YWNrID0gZnVuY3Rpb24gKGVsZW1lbnQpIHt9O1xuXG52YXIgcG9wQ3VycmVudERlYnVnU3RhY2sgPSBmdW5jdGlvbiAoKSB7fTtcblxudmFyIGhhc1dhcm5lZEFib3V0VXNpbmdDb250ZXh0QXNDb25zdW1lciA9IGZhbHNlO1xuXG57XG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkNCA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbiAgdmFsaWRhdGVQcm9wZXJ0aWVzSW5EZXZlbG9wbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBwcm9wcykge1xuICAgIHZhbGlkYXRlUHJvcGVydGllcyh0eXBlLCBwcm9wcyk7XG4gICAgdmFsaWRhdGVQcm9wZXJ0aWVzJDEodHlwZSwgcHJvcHMpO1xuICAgIHZhbGlkYXRlUHJvcGVydGllcyQyKHR5cGUsIHByb3BzLFxuICAgIC8qIGNhblVzZUV2ZW50U3lzdGVtICovXG4gICAgZmFsc2UpO1xuICB9O1xuXG4gIGRlc2NyaWJlU3RhY2tGcmFtZSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgdmFyIHNvdXJjZSA9IGVsZW1lbnQuX3NvdXJjZTtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcbiAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG4gICAgdmFyIG93bmVyTmFtZSA9IG51bGw7XG4gICAgcmV0dXJuIGRlc2NyaWJlQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lck5hbWUpO1xuICB9O1xuXG4gIHB1c2hDdXJyZW50RGVidWdTdGFjayA9IGZ1bmN0aW9uIChzdGFjaykge1xuICAgIGN1cnJlbnREZWJ1Z1N0YWNrcy5wdXNoKHN0YWNrKTtcblxuICAgIGlmIChjdXJyZW50RGVidWdTdGFja3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAvLyBXZSBhcmUgZW50ZXJpbmcgYSBzZXJ2ZXIgcmVuZGVyZXIuXG4gICAgICAvLyBSZW1lbWJlciB0aGUgcHJldmlvdXMgKGUuZy4gY2xpZW50KSBnbG9iYWwgc3RhY2sgaW1wbGVtZW50YXRpb24uXG4gICAgICBwcmV2R2V0Q3VycmVudFN0YWNrSW1wbCA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUkNC5nZXRDdXJyZW50U3RhY2s7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDQuZ2V0Q3VycmVudFN0YWNrID0gZ2V0Q3VycmVudFNlcnZlclN0YWNrSW1wbDtcbiAgICB9XG4gIH07XG5cbiAgcHVzaEVsZW1lbnRUb0RlYnVnU3RhY2sgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIC8vIEZvciB0aGUgaW5uZXJtb3N0IGV4ZWN1dGluZyBSZWFjdERPTVNlcnZlciBjYWxsLFxuICAgIHZhciBzdGFjayA9IGN1cnJlbnREZWJ1Z1N0YWNrc1tjdXJyZW50RGVidWdTdGFja3MubGVuZ3RoIC0gMV07IC8vIFRha2UgdGhlIGlubmVybW9zdCBleGVjdXRpbmcgZnJhbWUgKGUuZy4gPEZvbz4pLFxuXG4gICAgdmFyIGZyYW1lID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07IC8vIGFuZCByZWNvcmQgdGhhdCBpdCBoYXMgb25lIG1vcmUgZWxlbWVudCBhc3NvY2lhdGVkIHdpdGggaXQuXG5cbiAgICBmcmFtZS5kZWJ1Z0VsZW1lbnRTdGFjay5wdXNoKGVsZW1lbnQpOyAvLyBXZSBvbmx5IG5lZWQgdGhpcyBiZWNhdXNlIHdlIHRhaWwtb3B0aW1pemUgc2luZ2xlLWVsZW1lbnRcbiAgICAvLyBjaGlsZHJlbiBhbmQgZGlyZWN0bHkgaGFuZGxlIHRoZW0gaW4gYW4gaW5uZXIgbG9vcCBpbnN0ZWFkIG9mXG4gICAgLy8gY3JlYXRpbmcgc2VwYXJhdGUgZnJhbWVzIGZvciB0aGVtLlxuICB9O1xuXG4gIHBvcEN1cnJlbnREZWJ1Z1N0YWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGN1cnJlbnREZWJ1Z1N0YWNrcy5wb3AoKTtcblxuICAgIGlmIChjdXJyZW50RGVidWdTdGFja3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBXZSBhcmUgZXhpdGluZyB0aGUgc2VydmVyIHJlbmRlcmVyLlxuICAgICAgLy8gUmVzdG9yZSB0aGUgcHJldmlvdXMgKGUuZy4gY2xpZW50KSBnbG9iYWwgc3RhY2sgaW1wbGVtZW50YXRpb24uXG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDQuZ2V0Q3VycmVudFN0YWNrID0gcHJldkdldEN1cnJlbnRTdGFja0ltcGw7XG4gICAgICBwcmV2R2V0Q3VycmVudFN0YWNrSW1wbCA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIGdldEN1cnJlbnRTZXJ2ZXJTdGFja0ltcGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGN1cnJlbnREZWJ1Z1N0YWNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIE5vdGhpbmcgaXMgY3VycmVudGx5IHJlbmRlcmluZy5cbiAgICAgIHJldHVybiAnJztcbiAgICB9IC8vIFJlYWN0RE9NU2VydmVyIGlzIHJlZW50cmFudCBzbyB0aGVyZSBtYXkgYmUgbXVsdGlwbGUgY2FsbHMgYXQgdGhlIHNhbWUgdGltZS5cbiAgICAvLyBUYWtlIHRoZSBmcmFtZXMgZnJvbSB0aGUgaW5uZXJtb3N0IGNhbGwgd2hpY2ggaXMgdGhlIGxhc3QgaW4gdGhlIGFycmF5LlxuXG5cbiAgICB2YXIgZnJhbWVzID0gY3VycmVudERlYnVnU3RhY2tzW2N1cnJlbnREZWJ1Z1N0YWNrcy5sZW5ndGggLSAxXTtcbiAgICB2YXIgc3RhY2sgPSAnJzsgLy8gR28gdGhyb3VnaCBldmVyeSBmcmFtZSBpbiB0aGUgc3RhY2sgZnJvbSB0aGUgaW5uZXJtb3N0IG9uZS5cblxuICAgIGZvciAodmFyIGkgPSBmcmFtZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBmcmFtZSA9IGZyYW1lc1tpXTsgLy8gRXZlcnkgZnJhbWUgbWlnaHQgaGF2ZSBtb3JlIHRoYW4gb25lIGRlYnVnIGVsZW1lbnQgc3RhY2sgZW50cnkgYXNzb2NpYXRlZCB3aXRoIGl0LlxuICAgICAgLy8gVGhpcyBpcyBiZWNhdXNlIHNpbmdsZS1jaGlsZCBuZXN0aW5nIGRvZXNuJ3QgY3JlYXRlIG1hdGVyaWFsaXplZCBmcmFtZXMuXG4gICAgICAvLyBJbnN0ZWFkIGl0IHdvdWxkIHB1c2ggdGhlbSB0aHJvdWdoIGBwdXNoRWxlbWVudFRvRGVidWdTdGFjaygpYC5cblxuICAgICAgdmFyIGRlYnVnRWxlbWVudFN0YWNrID0gZnJhbWUuZGVidWdFbGVtZW50U3RhY2s7XG5cbiAgICAgIGZvciAodmFyIGlpID0gZGVidWdFbGVtZW50U3RhY2subGVuZ3RoIC0gMTsgaWkgPj0gMDsgaWktLSkge1xuICAgICAgICBzdGFjayArPSBkZXNjcmliZVN0YWNrRnJhbWUoZGVidWdFbGVtZW50U3RhY2tbaWldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhY2s7XG4gIH07XG59XG5cbnZhciBkaWRXYXJuRGVmYXVsdElucHV0VmFsdWUgPSBmYWxzZTtcbnZhciBkaWRXYXJuRGVmYXVsdENoZWNrZWQgPSBmYWxzZTtcbnZhciBkaWRXYXJuRGVmYXVsdFNlbGVjdFZhbHVlID0gZmFsc2U7XG52YXIgZGlkV2FybkRlZmF1bHRUZXh0YXJlYVZhbHVlID0gZmFsc2U7XG52YXIgZGlkV2FybkludmFsaWRPcHRpb25DaGlsZHJlbiA9IGZhbHNlO1xudmFyIGRpZFdhcm5BYm91dE5vb3BVcGRhdGVGb3JDb21wb25lbnQgPSB7fTtcbnZhciBkaWRXYXJuQWJvdXRCYWRDbGFzcyA9IHt9O1xudmFyIGRpZFdhcm5BYm91dE1vZHVsZVBhdHRlcm5Db21wb25lbnQgPSB7fTtcbnZhciBkaWRXYXJuQWJvdXREZXByZWNhdGVkV2lsbE1vdW50ID0ge307XG52YXIgZGlkV2FybkFib3V0VW5kZWZpbmVkRGVyaXZlZFN0YXRlID0ge307XG52YXIgZGlkV2FybkFib3V0VW5pbml0aWFsaXplZFN0YXRlID0ge307XG52YXIgdmFsdWVQcm9wTmFtZXMgPSBbJ3ZhbHVlJywgJ2RlZmF1bHRWYWx1ZSddO1xudmFyIG5ld2xpbmVFYXRpbmdUYWdzID0ge1xuICBsaXN0aW5nOiB0cnVlLFxuICBwcmU6IHRydWUsXG4gIHRleHRhcmVhOiB0cnVlXG59OyAvLyBXZSBhY2NlcHQgYW55IHRhZyB0byBiZSByZW5kZXJlZCBidXQgc2luY2UgdGhpcyBnZXRzIGluamVjdGVkIGludG8gYXJiaXRyYXJ5XG4vLyBIVE1MLCB3ZSB3YW50IHRvIG1ha2Ugc3VyZSB0aGF0IGl0J3MgYSBzYWZlIHRhZy5cbi8vIGh0dHA6Ly93d3cudzMub3JnL1RSL1JFQy14bWwvI05ULU5hbWVcblxudmFyIFZBTElEX1RBR19SRUdFWCA9IC9eW2EtekEtWl1bYS16QS1aOl9cXC5cXC1cXGRdKiQvOyAvLyBTaW1wbGlmaWVkIHN1YnNldFxuXG52YXIgdmFsaWRhdGVkVGFnQ2FjaGUgPSB7fTtcblxuZnVuY3Rpb24gdmFsaWRhdGVEYW5nZXJvdXNUYWcodGFnKSB7XG4gIGlmICghdmFsaWRhdGVkVGFnQ2FjaGUuaGFzT3duUHJvcGVydHkodGFnKSkge1xuICAgIGlmICghVkFMSURfVEFHX1JFR0VYLnRlc3QodGFnKSkge1xuICAgICAge1xuICAgICAgICB0aHJvdyBFcnJvciggXCJJbnZhbGlkIHRhZzogXCIgKyB0YWcgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YWxpZGF0ZWRUYWdDYWNoZVt0YWddID0gdHJ1ZTtcbiAgfVxufVxuXG52YXIgc3R5bGVOYW1lQ2FjaGUgPSB7fTtcblxudmFyIHByb2Nlc3NTdHlsZU5hbWUgPSBmdW5jdGlvbiAoc3R5bGVOYW1lKSB7XG4gIGlmIChzdHlsZU5hbWVDYWNoZS5oYXNPd25Qcm9wZXJ0eShzdHlsZU5hbWUpKSB7XG4gICAgcmV0dXJuIHN0eWxlTmFtZUNhY2hlW3N0eWxlTmFtZV07XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gaHlwaGVuYXRlU3R5bGVOYW1lKHN0eWxlTmFtZSk7XG4gIHN0eWxlTmFtZUNhY2hlW3N0eWxlTmFtZV0gPSByZXN1bHQ7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVNYXJrdXBGb3JTdHlsZXMoc3R5bGVzKSB7XG4gIHZhciBzZXJpYWxpemVkID0gJyc7XG4gIHZhciBkZWxpbWl0ZXIgPSAnJztcblxuICBmb3IgKHZhciBzdHlsZU5hbWUgaW4gc3R5bGVzKSB7XG4gICAgaWYgKCFzdHlsZXMuaGFzT3duUHJvcGVydHkoc3R5bGVOYW1lKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFyIGlzQ3VzdG9tUHJvcGVydHkgPSBzdHlsZU5hbWUuaW5kZXhPZignLS0nKSA9PT0gMDtcbiAgICB2YXIgc3R5bGVWYWx1ZSA9IHN0eWxlc1tzdHlsZU5hbWVdO1xuXG4gICAge1xuICAgICAgaWYgKCFpc0N1c3RvbVByb3BlcnR5KSB7XG4gICAgICAgIHdhcm5WYWxpZFN0eWxlJDEoc3R5bGVOYW1lLCBzdHlsZVZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3R5bGVWYWx1ZSAhPSBudWxsKSB7XG4gICAgICBzZXJpYWxpemVkICs9IGRlbGltaXRlciArIChpc0N1c3RvbVByb3BlcnR5ID8gc3R5bGVOYW1lIDogcHJvY2Vzc1N0eWxlTmFtZShzdHlsZU5hbWUpKSArICc6JztcbiAgICAgIHNlcmlhbGl6ZWQgKz0gZGFuZ2Vyb3VzU3R5bGVWYWx1ZShzdHlsZU5hbWUsIHN0eWxlVmFsdWUsIGlzQ3VzdG9tUHJvcGVydHkpO1xuICAgICAgZGVsaW1pdGVyID0gJzsnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzZXJpYWxpemVkIHx8IG51bGw7XG59XG5cbmZ1bmN0aW9uIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBjYWxsZXJOYW1lKSB7XG4gIHtcbiAgICB2YXIgX2NvbnN0cnVjdG9yID0gcHVibGljSW5zdGFuY2UuY29uc3RydWN0b3I7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBfY29uc3RydWN0b3IgJiYgZ2V0Q29tcG9uZW50TmFtZShfY29uc3RydWN0b3IpIHx8ICdSZWFjdENsYXNzJztcbiAgICB2YXIgd2FybmluZ0tleSA9IGNvbXBvbmVudE5hbWUgKyAnLicgKyBjYWxsZXJOYW1lO1xuXG4gICAgaWYgKGRpZFdhcm5BYm91dE5vb3BVcGRhdGVGb3JDb21wb25lbnRbd2FybmluZ0tleV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlcnJvcignJXMoLi4uKTogQ2FuIG9ubHkgdXBkYXRlIGEgbW91bnRpbmcgY29tcG9uZW50LiAnICsgJ1RoaXMgdXN1YWxseSBtZWFucyB5b3UgY2FsbGVkICVzKCkgb3V0c2lkZSBjb21wb25lbnRXaWxsTW91bnQoKSBvbiB0aGUgc2VydmVyLiAnICsgJ1RoaXMgaXMgYSBuby1vcC5cXG5cXG5QbGVhc2UgY2hlY2sgdGhlIGNvZGUgZm9yIHRoZSAlcyBjb21wb25lbnQuJywgY2FsbGVyTmFtZSwgY2FsbGVyTmFtZSwgY29tcG9uZW50TmFtZSk7XG5cbiAgICBkaWRXYXJuQWJvdXROb29wVXBkYXRlRm9yQ29tcG9uZW50W3dhcm5pbmdLZXldID0gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHJldHVybiBDb21wb25lbnQucHJvdG90eXBlICYmIENvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudDtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uQ2hpbGRyZW5Jbm5lck1hcmt1cChwcm9wcykge1xuICB2YXIgaW5uZXJIVE1MID0gcHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw7XG5cbiAgaWYgKGlubmVySFRNTCAhPSBudWxsKSB7XG4gICAgaWYgKGlubmVySFRNTC5fX2h0bWwgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGlubmVySFRNTC5fX2h0bWw7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBjb250ZW50ID0gcHJvcHMuY2hpbGRyZW47XG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBjb250ZW50ID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIGVzY2FwZVRleHRGb3JCcm93c2VyKGNvbnRlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuVG9wTGV2ZWxDaGlsZHJlbihjaGlsZHJlbikge1xuICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSkge1xuICAgIHJldHVybiB0b0FycmF5KGNoaWxkcmVuKTtcbiAgfVxuXG4gIHZhciBlbGVtZW50ID0gY2hpbGRyZW47XG5cbiAgaWYgKGVsZW1lbnQudHlwZSAhPT0gUkVBQ1RfRlJBR01FTlRfVFlQRSkge1xuICAgIHJldHVybiBbZWxlbWVudF07XG4gIH1cblxuICB2YXIgZnJhZ21lbnRDaGlsZHJlbiA9IGVsZW1lbnQucHJvcHMuY2hpbGRyZW47XG5cbiAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChmcmFnbWVudENoaWxkcmVuKSkge1xuICAgIHJldHVybiB0b0FycmF5KGZyYWdtZW50Q2hpbGRyZW4pO1xuICB9XG5cbiAgdmFyIGZyYWdtZW50Q2hpbGRFbGVtZW50ID0gZnJhZ21lbnRDaGlsZHJlbjtcbiAgcmV0dXJuIFtmcmFnbWVudENoaWxkRWxlbWVudF07XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW5PcHRpb25DaGlsZHJlbihjaGlsZHJlbikge1xuICBpZiAoY2hpbGRyZW4gPT09IHVuZGVmaW5lZCB8fCBjaGlsZHJlbiA9PT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuXG4gIHZhciBjb250ZW50ID0gJyc7IC8vIEZsYXR0ZW4gY2hpbGRyZW4gYW5kIHdhcm4gaWYgdGhleSBhcmVuJ3Qgc3RyaW5ncyBvciBudW1iZXJzO1xuICAvLyBpbnZhbGlkIHR5cGVzIGFyZSBpZ25vcmVkLlxuXG4gIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGlmIChjaGlsZCA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29udGVudCArPSBjaGlsZDtcblxuICAgIHtcbiAgICAgIGlmICghZGlkV2FybkludmFsaWRPcHRpb25DaGlsZHJlbiAmJiB0eXBlb2YgY2hpbGQgIT09ICdzdHJpbmcnICYmIHR5cGVvZiBjaGlsZCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgZGlkV2FybkludmFsaWRPcHRpb25DaGlsZHJlbiA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJ09ubHkgc3RyaW5ncyBhbmQgbnVtYmVycyBhcmUgc3VwcG9ydGVkIGFzIDxvcHRpb24+IGNoaWxkcmVuLicpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBjb250ZW50O1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkkMiA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgU1RZTEUgPSAnc3R5bGUnO1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBjaGlsZHJlbjogbnVsbCxcbiAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IG51bGwsXG4gIHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZzogbnVsbCxcbiAgc3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nOiBudWxsXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVPcGVuVGFnTWFya3VwKHRhZ1ZlcmJhdGltLCB0YWdMb3dlcmNhc2UsIHByb3BzLCBuYW1lc3BhY2UsIG1ha2VTdGF0aWNNYXJrdXAsIGlzUm9vdEVsZW1lbnQpIHtcbiAgdmFyIHJldCA9ICc8JyArIHRhZ1ZlcmJhdGltO1xuXG4gIGZvciAodmFyIHByb3BLZXkgaW4gcHJvcHMpIHtcbiAgICBpZiAoIWhhc093blByb3BlcnR5JDIuY2FsbChwcm9wcywgcHJvcEtleSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wS2V5XTtcblxuICAgIGlmIChwcm9wVmFsdWUgPT0gbnVsbCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKHByb3BLZXkgPT09IFNUWUxFKSB7XG4gICAgICBwcm9wVmFsdWUgPSBjcmVhdGVNYXJrdXBGb3JTdHlsZXMocHJvcFZhbHVlKTtcbiAgICB9XG5cbiAgICB2YXIgbWFya3VwID0gbnVsbDtcblxuICAgIGlmIChpc0N1c3RvbUNvbXBvbmVudCh0YWdMb3dlcmNhc2UsIHByb3BzKSkge1xuICAgICAgaWYgKCFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wS2V5KSkge1xuICAgICAgICBtYXJrdXAgPSBjcmVhdGVNYXJrdXBGb3JDdXN0b21BdHRyaWJ1dGUocHJvcEtleSwgcHJvcFZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbWFya3VwID0gY3JlYXRlTWFya3VwRm9yUHJvcGVydHkocHJvcEtleSwgcHJvcFZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAobWFya3VwKSB7XG4gICAgICByZXQgKz0gJyAnICsgbWFya3VwO1xuICAgIH1cbiAgfSAvLyBGb3Igc3RhdGljIHBhZ2VzLCBubyBuZWVkIHRvIHB1dCBSZWFjdCBJRCBhbmQgY2hlY2tzdW0uIFNhdmVzIGxvdHMgb2ZcbiAgLy8gYnl0ZXMuXG5cblxuICBpZiAobWFrZVN0YXRpY01hcmt1cCkge1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBpZiAoaXNSb290RWxlbWVudCkge1xuICAgIHJldCArPSAnICcgKyBjcmVhdGVNYXJrdXBGb3JSb290KCk7XG4gIH1cblxuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVJlbmRlclJlc3VsdChjaGlsZCwgdHlwZSkge1xuICBpZiAoY2hpbGQgPT09IHVuZGVmaW5lZCkge1xuICAgIHtcbiAgICAgIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoIChnZXRDb21wb25lbnROYW1lKHR5cGUpIHx8ICdDb21wb25lbnQnKSArIFwiKC4uLik6IE5vdGhpbmcgd2FzIHJldHVybmVkIGZyb20gcmVuZGVyLiBUaGlzIHVzdWFsbHkgbWVhbnMgYSByZXR1cm4gc3RhdGVtZW50IGlzIG1pc3NpbmcuIE9yLCB0byByZW5kZXIgbm90aGluZywgcmV0dXJuIG51bGwuXCIgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZShjaGlsZCwgY29udGV4dCwgdGhyZWFkSUQpIHtcbiAgd2hpbGUgKFJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgIC8vIFNhZmUgYmVjYXVzZSB3ZSBqdXN0IGNoZWNrZWQgaXQncyBhbiBlbGVtZW50LlxuICAgIHZhciBlbGVtZW50ID0gY2hpbGQ7XG4gICAgdmFyIENvbXBvbmVudCA9IGVsZW1lbnQudHlwZTtcblxuICAgIHtcbiAgICAgIHB1c2hFbGVtZW50VG9EZWJ1Z1N0YWNrKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgQ29tcG9uZW50ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBwcm9jZXNzQ2hpbGQoZWxlbWVudCwgQ29tcG9uZW50KTtcbiAgfSAvLyBFeHRyYSBjbG9zdXJlIHNvIHF1ZXVlIGFuZCByZXBsYWNlIGNhbiBiZSBjYXB0dXJlZCBwcm9wZXJseVxuXG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0NoaWxkKGVsZW1lbnQsIENvbXBvbmVudCkge1xuICAgIHZhciBpc0NsYXNzID0gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCk7XG4gICAgdmFyIHB1YmxpY0NvbnRleHQgPSBwcm9jZXNzQ29udGV4dChDb21wb25lbnQsIGNvbnRleHQsIHRocmVhZElELCBpc0NsYXNzKTtcbiAgICB2YXIgcXVldWUgPSBbXTtcbiAgICB2YXIgcmVwbGFjZSA9IGZhbHNlO1xuICAgIHZhciB1cGRhdGVyID0ge1xuICAgICAgaXNNb3VudGVkOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSxcbiAgICAgIGVucXVldWVGb3JjZVVwZGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgICAgIGlmIChxdWV1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnZm9yY2VVcGRhdGUnKTtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVucXVldWVSZXBsYWNlU3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY29tcGxldGVTdGF0ZSkge1xuICAgICAgICByZXBsYWNlID0gdHJ1ZTtcbiAgICAgICAgcXVldWUgPSBbY29tcGxldGVTdGF0ZV07XG4gICAgICB9LFxuICAgICAgZW5xdWV1ZVNldFN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGN1cnJlbnRQYXJ0aWFsU3RhdGUpIHtcbiAgICAgICAgaWYgKHF1ZXVlID09PSBudWxsKSB7XG4gICAgICAgICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdzZXRTdGF0ZScpO1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcXVldWUucHVzaChjdXJyZW50UGFydGlhbFN0YXRlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHZhciBpbnN0O1xuXG4gICAgaWYgKGlzQ2xhc3MpIHtcbiAgICAgIGluc3QgPSBuZXcgQ29tcG9uZW50KGVsZW1lbnQucHJvcHMsIHB1YmxpY0NvbnRleHQsIHVwZGF0ZXIpO1xuXG4gICAgICBpZiAodHlwZW9mIENvbXBvbmVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAge1xuICAgICAgICAgIGlmIChpbnN0LnN0YXRlID09PSBudWxsIHx8IGluc3Quc3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKENvbXBvbmVudCkgfHwgJ1Vua25vd24nO1xuXG4gICAgICAgICAgICBpZiAoIWRpZFdhcm5BYm91dFVuaW5pdGlhbGl6ZWRTdGF0ZVtjb21wb25lbnROYW1lXSkge1xuICAgICAgICAgICAgICBlcnJvcignYCVzYCB1c2VzIGBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNgIGJ1dCBpdHMgaW5pdGlhbCBzdGF0ZSBpcyAnICsgJyVzLiBUaGlzIGlzIG5vdCByZWNvbW1lbmRlZC4gSW5zdGVhZCwgZGVmaW5lIHRoZSBpbml0aWFsIHN0YXRlIGJ5ICcgKyAnYXNzaWduaW5nIGFuIG9iamVjdCB0byBgdGhpcy5zdGF0ZWAgaW4gdGhlIGNvbnN0cnVjdG9yIG9mIGAlc2AuICcgKyAnVGhpcyBlbnN1cmVzIHRoYXQgYGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc2AgYXJndW1lbnRzIGhhdmUgYSBjb25zaXN0ZW50IHNoYXBlLicsIGNvbXBvbmVudE5hbWUsIGluc3Quc3RhdGUgPT09IG51bGwgPyAnbnVsbCcgOiAndW5kZWZpbmVkJywgY29tcG9uZW50TmFtZSk7XG5cbiAgICAgICAgICAgICAgZGlkV2FybkFib3V0VW5pbml0aWFsaXplZFN0YXRlW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcGFydGlhbFN0YXRlID0gQ29tcG9uZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcy5jYWxsKG51bGwsIGVsZW1lbnQucHJvcHMsIGluc3Quc3RhdGUpO1xuXG4gICAgICAgIHtcbiAgICAgICAgICBpZiAocGFydGlhbFN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhciBfY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWUoQ29tcG9uZW50KSB8fCAnVW5rbm93bic7XG5cbiAgICAgICAgICAgIGlmICghZGlkV2FybkFib3V0VW5kZWZpbmVkRGVyaXZlZFN0YXRlW19jb21wb25lbnROYW1lXSkge1xuICAgICAgICAgICAgICBlcnJvcignJXMuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKCk6IEEgdmFsaWQgc3RhdGUgb2JqZWN0IChvciBudWxsKSBtdXN0IGJlIHJldHVybmVkLiAnICsgJ1lvdSBoYXZlIHJldHVybmVkIHVuZGVmaW5lZC4nLCBfY29tcG9uZW50TmFtZSk7XG5cbiAgICAgICAgICAgICAgZGlkV2FybkFib3V0VW5kZWZpbmVkRGVyaXZlZFN0YXRlW19jb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcnRpYWxTdGF0ZSAhPSBudWxsKSB7XG4gICAgICAgICAgaW5zdC5zdGF0ZSA9IF9hc3NpZ24oe30sIGluc3Quc3RhdGUsIHBhcnRpYWxTdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAge1xuICAgICAgICBpZiAoQ29tcG9uZW50LnByb3RvdHlwZSAmJiB0eXBlb2YgQ29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB2YXIgX2NvbXBvbmVudE5hbWUyID0gZ2V0Q29tcG9uZW50TmFtZShDb21wb25lbnQpIHx8ICdVbmtub3duJztcblxuICAgICAgICAgIGlmICghZGlkV2FybkFib3V0QmFkQ2xhc3NbX2NvbXBvbmVudE5hbWUyXSkge1xuICAgICAgICAgICAgZXJyb3IoXCJUaGUgPCVzIC8+IGNvbXBvbmVudCBhcHBlYXJzIHRvIGhhdmUgYSByZW5kZXIgbWV0aG9kLCBidXQgZG9lc24ndCBleHRlbmQgUmVhY3QuQ29tcG9uZW50LiBcIiArICdUaGlzIGlzIGxpa2VseSB0byBjYXVzZSBlcnJvcnMuIENoYW5nZSAlcyB0byBleHRlbmQgUmVhY3QuQ29tcG9uZW50IGluc3RlYWQuJywgX2NvbXBvbmVudE5hbWUyLCBfY29tcG9uZW50TmFtZTIpO1xuXG4gICAgICAgICAgICBkaWRXYXJuQWJvdXRCYWRDbGFzc1tfY29tcG9uZW50TmFtZTJdID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGNvbXBvbmVudElkZW50aXR5ID0ge307XG4gICAgICBwcmVwYXJlVG9Vc2VIb29rcyhjb21wb25lbnRJZGVudGl0eSk7XG4gICAgICBpbnN0ID0gQ29tcG9uZW50KGVsZW1lbnQucHJvcHMsIHB1YmxpY0NvbnRleHQsIHVwZGF0ZXIpO1xuICAgICAgaW5zdCA9IGZpbmlzaEhvb2tzKENvbXBvbmVudCwgZWxlbWVudC5wcm9wcywgaW5zdCwgcHVibGljQ29udGV4dCk7XG5cbiAgICAgIGlmIChpbnN0ID09IG51bGwgfHwgaW5zdC5yZW5kZXIgPT0gbnVsbCkge1xuICAgICAgICBjaGlsZCA9IGluc3Q7XG4gICAgICAgIHZhbGlkYXRlUmVuZGVyUmVzdWx0KGNoaWxkLCBDb21wb25lbnQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHtcbiAgICAgICAgdmFyIF9jb21wb25lbnROYW1lMyA9IGdldENvbXBvbmVudE5hbWUoQ29tcG9uZW50KSB8fCAnVW5rbm93bic7XG5cbiAgICAgICAgaWYgKCFkaWRXYXJuQWJvdXRNb2R1bGVQYXR0ZXJuQ29tcG9uZW50W19jb21wb25lbnROYW1lM10pIHtcbiAgICAgICAgICBlcnJvcignVGhlIDwlcyAvPiBjb21wb25lbnQgYXBwZWFycyB0byBiZSBhIGZ1bmN0aW9uIGNvbXBvbmVudCB0aGF0IHJldHVybnMgYSBjbGFzcyBpbnN0YW5jZS4gJyArICdDaGFuZ2UgJXMgdG8gYSBjbGFzcyB0aGF0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IGluc3RlYWQuICcgKyBcIklmIHlvdSBjYW4ndCB1c2UgYSBjbGFzcyB0cnkgYXNzaWduaW5nIHRoZSBwcm90b3R5cGUgb24gdGhlIGZ1bmN0aW9uIGFzIGEgd29ya2Fyb3VuZC4gXCIgKyBcImAlcy5wcm90b3R5cGUgPSBSZWFjdC5Db21wb25lbnQucHJvdG90eXBlYC4gRG9uJ3QgdXNlIGFuIGFycm93IGZ1bmN0aW9uIHNpbmNlIGl0IFwiICsgJ2Nhbm5vdCBiZSBjYWxsZWQgd2l0aCBgbmV3YCBieSBSZWFjdC4nLCBfY29tcG9uZW50TmFtZTMsIF9jb21wb25lbnROYW1lMywgX2NvbXBvbmVudE5hbWUzKTtcblxuICAgICAgICAgIGRpZFdhcm5BYm91dE1vZHVsZVBhdHRlcm5Db21wb25lbnRbX2NvbXBvbmVudE5hbWUzXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbnN0LnByb3BzID0gZWxlbWVudC5wcm9wcztcbiAgICBpbnN0LmNvbnRleHQgPSBwdWJsaWNDb250ZXh0O1xuICAgIGluc3QudXBkYXRlciA9IHVwZGF0ZXI7XG4gICAgdmFyIGluaXRpYWxTdGF0ZSA9IGluc3Quc3RhdGU7XG5cbiAgICBpZiAoaW5pdGlhbFN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGluc3Quc3RhdGUgPSBpbml0aWFsU3RhdGUgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaW5zdC5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50ID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBpbnN0LmNvbXBvbmVudFdpbGxNb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiBpbnN0LmNvbXBvbmVudFdpbGxNb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB7XG4gICAgICAgICAgaWYgKCBpbnN0LmNvbXBvbmVudFdpbGxNb3VudC5fX3N1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5nICE9PSB0cnVlKSB7XG4gICAgICAgICAgICB2YXIgX2NvbXBvbmVudE5hbWU0ID0gZ2V0Q29tcG9uZW50TmFtZShDb21wb25lbnQpIHx8ICdVbmtub3duJztcblxuICAgICAgICAgICAgaWYgKCFkaWRXYXJuQWJvdXREZXByZWNhdGVkV2lsbE1vdW50W19jb21wb25lbnROYW1lNF0pIHtcbiAgICAgICAgICAgICAgd2FybiggLy8ga2VlcCB0aGlzIHdhcm5pbmcgaW4gc3luYyB3aXRoIFJlYWN0U3RyaWN0TW9kZVdhcm5pbmcuanNcbiAgICAgICAgICAgICAgJ2NvbXBvbmVudFdpbGxNb3VudCBoYXMgYmVlbiByZW5hbWVkLCBhbmQgaXMgbm90IHJlY29tbWVuZGVkIGZvciB1c2UuICcgKyAnU2VlIGh0dHBzOi8vZmIubWUvcmVhY3QtdW5zYWZlLWNvbXBvbmVudC1saWZlY3ljbGVzIGZvciBkZXRhaWxzLlxcblxcbicgKyAnKiBNb3ZlIGNvZGUgZnJvbSBjb21wb25lbnRXaWxsTW91bnQgdG8gY29tcG9uZW50RGlkTW91bnQgKHByZWZlcnJlZCBpbiBtb3N0IGNhc2VzKSAnICsgJ29yIHRoZSBjb25zdHJ1Y3Rvci5cXG4nICsgJ1xcblBsZWFzZSB1cGRhdGUgdGhlIGZvbGxvd2luZyBjb21wb25lbnRzOiAlcycsIF9jb21wb25lbnROYW1lNCk7XG5cbiAgICAgICAgICAgICAgZGlkV2FybkFib3V0RGVwcmVjYXRlZFdpbGxNb3VudFtfY29tcG9uZW50TmFtZTRdID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gSW4gb3JkZXIgdG8gc3VwcG9ydCByZWFjdC1saWZlY3ljbGVzLWNvbXBhdCBwb2x5ZmlsbGVkIGNvbXBvbmVudHMsXG4gICAgICAgIC8vIFVuc2FmZSBsaWZlY3ljbGVzIHNob3VsZCBub3QgYmUgaW52b2tlZCBmb3IgYW55IGNvbXBvbmVudCB3aXRoIHRoZSBuZXcgZ0RTRlAuXG5cblxuICAgICAgICBpZiAodHlwZW9mIENvbXBvbmVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBpbnN0LmNvbXBvbmVudFdpbGxNb3VudCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaW5zdC5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBDb21wb25lbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIEluIG9yZGVyIHRvIHN1cHBvcnQgcmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQgcG9seWZpbGxlZCBjb21wb25lbnRzLFxuICAgICAgICAvLyBVbnNhZmUgbGlmZWN5Y2xlcyBzaG91bGQgbm90IGJlIGludm9rZWQgZm9yIGFueSBjb21wb25lbnQgd2l0aCB0aGUgbmV3IGdEU0ZQLlxuICAgICAgICBpbnN0LlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICB2YXIgb2xkUXVldWUgPSBxdWV1ZTtcbiAgICAgICAgdmFyIG9sZFJlcGxhY2UgPSByZXBsYWNlO1xuICAgICAgICBxdWV1ZSA9IG51bGw7XG4gICAgICAgIHJlcGxhY2UgPSBmYWxzZTtcblxuICAgICAgICBpZiAob2xkUmVwbGFjZSAmJiBvbGRRdWV1ZS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICBpbnN0LnN0YXRlID0gb2xkUXVldWVbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIG5leHRTdGF0ZSA9IG9sZFJlcGxhY2UgPyBvbGRRdWV1ZVswXSA6IGluc3Quc3RhdGU7XG4gICAgICAgICAgdmFyIGRvbnRNdXRhdGUgPSB0cnVlO1xuXG4gICAgICAgICAgZm9yICh2YXIgaSA9IG9sZFJlcGxhY2UgPyAxIDogMDsgaSA8IG9sZFF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFydGlhbCA9IG9sZFF1ZXVlW2ldO1xuXG4gICAgICAgICAgICB2YXIgX3BhcnRpYWxTdGF0ZSA9IHR5cGVvZiBwYXJ0aWFsID09PSAnZnVuY3Rpb24nID8gcGFydGlhbC5jYWxsKGluc3QsIG5leHRTdGF0ZSwgZWxlbWVudC5wcm9wcywgcHVibGljQ29udGV4dCkgOiBwYXJ0aWFsO1xuXG4gICAgICAgICAgICBpZiAoX3BhcnRpYWxTdGF0ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIGlmIChkb250TXV0YXRlKSB7XG4gICAgICAgICAgICAgICAgZG9udE11dGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIG5leHRTdGF0ZSA9IF9hc3NpZ24oe30sIG5leHRTdGF0ZSwgX3BhcnRpYWxTdGF0ZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX2Fzc2lnbihuZXh0U3RhdGUsIF9wYXJ0aWFsU3RhdGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5zdC5zdGF0ZSA9IG5leHRTdGF0ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWUgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNoaWxkID0gaW5zdC5yZW5kZXIoKTtcblxuICAgIHtcbiAgICAgIGlmIChjaGlsZCA9PT0gdW5kZWZpbmVkICYmIGluc3QucmVuZGVyLl9pc01vY2tGdW5jdGlvbikge1xuICAgICAgICAvLyBUaGlzIGlzIHByb2JhYmx5IGJhZCBwcmFjdGljZS4gQ29uc2lkZXIgd2FybmluZyBoZXJlIGFuZFxuICAgICAgICAvLyBkZXByZWNhdGluZyB0aGlzIGNvbnZlbmllbmNlLlxuICAgICAgICBjaGlsZCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFsaWRhdGVSZW5kZXJSZXN1bHQoY2hpbGQsIENvbXBvbmVudCk7XG4gICAgdmFyIGNoaWxkQ29udGV4dDtcblxuICAgIHtcbiAgICAgIGlmICh0eXBlb2YgaW5zdC5nZXRDaGlsZENvbnRleHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFyIF9jaGlsZENvbnRleHRUeXBlcyA9IENvbXBvbmVudC5jaGlsZENvbnRleHRUeXBlcztcblxuICAgICAgICBpZiAodHlwZW9mIF9jaGlsZENvbnRleHRUeXBlcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSBpbnN0LmdldENoaWxkQ29udGV4dCgpO1xuXG4gICAgICAgICAgZm9yICh2YXIgY29udGV4dEtleSBpbiBjaGlsZENvbnRleHQpIHtcbiAgICAgICAgICAgIGlmICghKGNvbnRleHRLZXkgaW4gX2NoaWxkQ29udGV4dFR5cGVzKSkge1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoIChnZXRDb21wb25lbnROYW1lKENvbXBvbmVudCkgfHwgJ1Vua25vd24nKSArIFwiLmdldENoaWxkQ29udGV4dCgpOiBrZXkgXFxcIlwiICsgY29udGV4dEtleSArIFwiXFxcIiBpcyBub3QgZGVmaW5lZCBpbiBjaGlsZENvbnRleHRUeXBlcy5cIiApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGVycm9yKCclcy5nZXRDaGlsZENvbnRleHQoKTogY2hpbGRDb250ZXh0VHlwZXMgbXVzdCBiZSBkZWZpbmVkIGluIG9yZGVyIHRvICcgKyAndXNlIGdldENoaWxkQ29udGV4dCgpLicsIGdldENvbXBvbmVudE5hbWUoQ29tcG9uZW50KSB8fCAnVW5rbm93bicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY2hpbGRDb250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQgPSBfYXNzaWduKHt9LCBjb250ZXh0LCBjaGlsZENvbnRleHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY2hpbGQ6IGNoaWxkLFxuICAgIGNvbnRleHQ6IGNvbnRleHRcbiAgfTtcbn1cblxudmFyIFJlYWN0RE9NU2VydmVyUmVuZGVyZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICAvLyBUT0RPOiB0eXBlIHRoaXMgbW9yZSBzdHJpY3RseTpcbiAgLy8gREVWLW9ubHlcbiAgZnVuY3Rpb24gUmVhY3RET01TZXJ2ZXJSZW5kZXJlcihjaGlsZHJlbiwgbWFrZVN0YXRpY01hcmt1cCkge1xuICAgIHZhciBmbGF0Q2hpbGRyZW4gPSBmbGF0dGVuVG9wTGV2ZWxDaGlsZHJlbihjaGlsZHJlbik7XG4gICAgdmFyIHRvcEZyYW1lID0ge1xuICAgICAgdHlwZTogbnVsbCxcbiAgICAgIC8vIEFzc3VtZSBhbGwgdHJlZXMgc3RhcnQgaW4gdGhlIEhUTUwgbmFtZXNwYWNlIChub3QgdG90YWxseSB0cnVlLCBidXRcbiAgICAgIC8vIHRoaXMgaXMgd2hhdCB3ZSBkaWQgaGlzdG9yaWNhbGx5KVxuICAgICAgZG9tTmFtZXNwYWNlOiBOYW1lc3BhY2VzLmh0bWwsXG4gICAgICBjaGlsZHJlbjogZmxhdENoaWxkcmVuLFxuICAgICAgY2hpbGRJbmRleDogMCxcbiAgICAgIGNvbnRleHQ6IGVtcHR5T2JqZWN0LFxuICAgICAgZm9vdGVyOiAnJ1xuICAgIH07XG5cbiAgICB7XG4gICAgICB0b3BGcmFtZS5kZWJ1Z0VsZW1lbnRTdGFjayA9IFtdO1xuICAgIH1cblxuICAgIHRoaXMudGhyZWFkSUQgPSBhbGxvY1RocmVhZElEKCk7XG4gICAgdGhpcy5zdGFjayA9IFt0b3BGcmFtZV07XG4gICAgdGhpcy5leGhhdXN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmN1cnJlbnRTZWxlY3RWYWx1ZSA9IG51bGw7XG4gICAgdGhpcy5wcmV2aW91c1dhc1RleHROb2RlID0gZmFsc2U7XG4gICAgdGhpcy5tYWtlU3RhdGljTWFya3VwID0gbWFrZVN0YXRpY01hcmt1cDtcbiAgICB0aGlzLnN1c3BlbnNlRGVwdGggPSAwOyAvLyBDb250ZXh0IChuZXcgQVBJKVxuXG4gICAgdGhpcy5jb250ZXh0SW5kZXggPSAtMTtcbiAgICB0aGlzLmNvbnRleHRTdGFjayA9IFtdO1xuICAgIHRoaXMuY29udGV4dFZhbHVlU3RhY2sgPSBbXTtcblxuICAgIHtcbiAgICAgIHRoaXMuY29udGV4dFByb3ZpZGVyU3RhY2sgPSBbXTtcbiAgICB9XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUmVhY3RET01TZXJ2ZXJSZW5kZXJlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIGlmICghdGhpcy5leGhhdXN0ZWQpIHtcbiAgICAgIHRoaXMuZXhoYXVzdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2xlYXJQcm92aWRlcnMoKTtcbiAgICAgIGZyZWVUaHJlYWRJRCh0aGlzLnRocmVhZElEKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIE5vdGU6IFdlIHVzZSBqdXN0IHR3byBzdGFja3MgcmVnYXJkbGVzcyBvZiBob3cgbWFueSBjb250ZXh0IHByb3ZpZGVycyB5b3UgaGF2ZS5cbiAgICogUHJvdmlkZXJzIGFyZSBhbHdheXMgcG9wcGVkIGluIHRoZSByZXZlcnNlIG9yZGVyIHRvIGhvdyB0aGV5IHdlcmUgcHVzaGVkXG4gICAqIHNvIHdlIGFsd2F5cyBrbm93IG9uIHRoZSB3YXkgZG93biB3aGljaCBwcm92aWRlciB5b3UnbGwgZW5jb3VudGVyIG5leHQgb24gdGhlIHdheSB1cC5cbiAgICogT24gdGhlIHdheSBkb3duLCB3ZSBwdXNoIHRoZSBjdXJyZW50IHByb3ZpZGVyLCBhbmQgaXRzIGNvbnRleHQgdmFsdWUgKmJlZm9yZSpcbiAgICogd2UgbXV0YXRlZCBpdCwgb250byB0aGUgc3RhY2tzLiBUaGVyZWZvcmUsIG9uIHRoZSB3YXkgdXAsIHdlIGFsd2F5cyBrbm93IHdoaWNoXG4gICAqIHByb3ZpZGVyIG5lZWRzIHRvIGJlIFwicmVzdG9yZWRcIiB0byB3aGljaCB2YWx1ZS5cbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L3B1bGwvMTI5ODUjaXNzdWVjb21tZW50LTM5NjMwMTI0OFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wdXNoUHJvdmlkZXIgPSBmdW5jdGlvbiBwdXNoUHJvdmlkZXIocHJvdmlkZXIpIHtcbiAgICB2YXIgaW5kZXggPSArK3RoaXMuY29udGV4dEluZGV4O1xuICAgIHZhciBjb250ZXh0ID0gcHJvdmlkZXIudHlwZS5fY29udGV4dDtcbiAgICB2YXIgdGhyZWFkSUQgPSB0aGlzLnRocmVhZElEO1xuICAgIHZhbGlkYXRlQ29udGV4dEJvdW5kcyhjb250ZXh0LCB0aHJlYWRJRCk7XG4gICAgdmFyIHByZXZpb3VzVmFsdWUgPSBjb250ZXh0W3RocmVhZElEXTsgLy8gUmVtZW1iZXIgd2hpY2ggdmFsdWUgdG8gcmVzdG9yZSB0aGlzIGNvbnRleHQgdG8gb24gb3VyIHdheSB1cC5cblxuICAgIHRoaXMuY29udGV4dFN0YWNrW2luZGV4XSA9IGNvbnRleHQ7XG4gICAgdGhpcy5jb250ZXh0VmFsdWVTdGFja1tpbmRleF0gPSBwcmV2aW91c1ZhbHVlO1xuXG4gICAge1xuICAgICAgLy8gT25seSB1c2VkIGZvciBwdXNoL3BvcCBtaXNtYXRjaCB3YXJuaW5ncy5cbiAgICAgIHRoaXMuY29udGV4dFByb3ZpZGVyU3RhY2tbaW5kZXhdID0gcHJvdmlkZXI7XG4gICAgfSAvLyBNdXRhdGUgdGhlIGN1cnJlbnQgdmFsdWUuXG5cblxuICAgIGNvbnRleHRbdGhyZWFkSURdID0gcHJvdmlkZXIucHJvcHMudmFsdWU7XG4gIH07XG5cbiAgX3Byb3RvLnBvcFByb3ZpZGVyID0gZnVuY3Rpb24gcG9wUHJvdmlkZXIocHJvdmlkZXIpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLmNvbnRleHRJbmRleDtcblxuICAgIHtcbiAgICAgIGlmIChpbmRleCA8IDAgfHwgcHJvdmlkZXIgIT09IHRoaXMuY29udGV4dFByb3ZpZGVyU3RhY2tbaW5kZXhdKSB7XG4gICAgICAgIGVycm9yKCdVbmV4cGVjdGVkIHBvcC4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY29udGV4dCA9IHRoaXMuY29udGV4dFN0YWNrW2luZGV4XTtcbiAgICB2YXIgcHJldmlvdXNWYWx1ZSA9IHRoaXMuY29udGV4dFZhbHVlU3RhY2tbaW5kZXhdOyAvLyBcIkhpZGVcIiB0aGVzZSBudWxsIGFzc2lnbm1lbnRzIGZyb20gRmxvdyBieSB1c2luZyBgYW55YFxuICAgIC8vIGJlY2F1c2UgY29uY2VwdHVhbGx5IHRoZXkgYXJlIGRlbGV0aW9ucy0tYXMgbG9uZyBhcyB3ZVxuICAgIC8vIHByb21pc2UgdG8gbmV2ZXIgYWNjZXNzIHZhbHVlcyBiZXlvbmQgYHRoaXMuY29udGV4dEluZGV4YC5cblxuICAgIHRoaXMuY29udGV4dFN0YWNrW2luZGV4XSA9IG51bGw7XG4gICAgdGhpcy5jb250ZXh0VmFsdWVTdGFja1tpbmRleF0gPSBudWxsO1xuXG4gICAge1xuICAgICAgdGhpcy5jb250ZXh0UHJvdmlkZXJTdGFja1tpbmRleF0gPSBudWxsO1xuICAgIH1cblxuICAgIHRoaXMuY29udGV4dEluZGV4LS07IC8vIFJlc3RvcmUgdG8gdGhlIHByZXZpb3VzIHZhbHVlIHdlIHN0b3JlZCBhcyB3ZSB3ZXJlIHdhbGtpbmcgZG93bi5cbiAgICAvLyBXZSd2ZSBhbHJlYWR5IHZlcmlmaWVkIHRoYXQgdGhpcyBjb250ZXh0IGhhcyBiZWVuIGV4cGFuZGVkIHRvIGFjY29tbW9kYXRlXG4gICAgLy8gdGhpcyB0aHJlYWQgaWQsIHNvIHdlIGRvbid0IG5lZWQgdG8gZG8gaXQgYWdhaW4uXG5cbiAgICBjb250ZXh0W3RoaXMudGhyZWFkSURdID0gcHJldmlvdXNWYWx1ZTtcbiAgfTtcblxuICBfcHJvdG8uY2xlYXJQcm92aWRlcnMgPSBmdW5jdGlvbiBjbGVhclByb3ZpZGVycygpIHtcbiAgICAvLyBSZXN0b3JlIGFueSByZW1haW5pbmcgcHJvdmlkZXJzIG9uIHRoZSBzdGFjayB0byBwcmV2aW91cyB2YWx1ZXNcbiAgICBmb3IgKHZhciBpbmRleCA9IHRoaXMuY29udGV4dEluZGV4OyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgICB2YXIgY29udGV4dCA9IHRoaXMuY29udGV4dFN0YWNrW2luZGV4XTtcbiAgICAgIHZhciBwcmV2aW91c1ZhbHVlID0gdGhpcy5jb250ZXh0VmFsdWVTdGFja1tpbmRleF07XG4gICAgICBjb250ZXh0W3RoaXMudGhyZWFkSURdID0gcHJldmlvdXNWYWx1ZTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlYWQgPSBmdW5jdGlvbiByZWFkKGJ5dGVzKSB7XG4gICAgaWYgKHRoaXMuZXhoYXVzdGVkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgcHJldlRocmVhZElEID0gY3VycmVudFRocmVhZElEO1xuICAgIHNldEN1cnJlbnRUaHJlYWRJRCh0aGlzLnRocmVhZElEKTtcbiAgICB2YXIgcHJldkRpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7XG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gRGlzcGF0Y2hlcjtcblxuICAgIHRyeSB7XG4gICAgICAvLyBNYXJrdXAgZ2VuZXJhdGVkIHdpdGhpbiA8U3VzcGVuc2U+IGVuZHMgdXAgYnVmZmVyZWQgdW50aWwgd2Uga25vd1xuICAgICAgLy8gbm90aGluZyBpbiB0aGF0IGJvdW5kYXJ5IHN1c3BlbmRlZFxuICAgICAgdmFyIG91dCA9IFsnJ107XG4gICAgICB2YXIgc3VzcGVuZGVkID0gZmFsc2U7XG5cbiAgICAgIHdoaWxlIChvdXRbMF0ubGVuZ3RoIDwgYnl0ZXMpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5leGhhdXN0ZWQgPSB0cnVlO1xuICAgICAgICAgIGZyZWVUaHJlYWRJRCh0aGlzLnRocmVhZElEKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmcmFtZSA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXTtcblxuICAgICAgICBpZiAoc3VzcGVuZGVkIHx8IGZyYW1lLmNoaWxkSW5kZXggPj0gZnJhbWUuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIGZvb3RlciA9IGZyYW1lLmZvb3RlcjtcblxuICAgICAgICAgIGlmIChmb290ZXIgIT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzV2FzVGV4dE5vZGUgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnN0YWNrLnBvcCgpO1xuXG4gICAgICAgICAgaWYgKGZyYW1lLnR5cGUgPT09ICdzZWxlY3QnKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTZWxlY3RWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgfSBlbHNlIGlmIChmcmFtZS50eXBlICE9IG51bGwgJiYgZnJhbWUudHlwZS50eXBlICE9IG51bGwgJiYgZnJhbWUudHlwZS50eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFKSB7XG4gICAgICAgICAgICB2YXIgcHJvdmlkZXIgPSBmcmFtZS50eXBlO1xuICAgICAgICAgICAgdGhpcy5wb3BQcm92aWRlcihwcm92aWRlcik7XG4gICAgICAgICAgfSBlbHNlIGlmIChmcmFtZS50eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFKSB7XG4gICAgICAgICAgICB0aGlzLnN1c3BlbnNlRGVwdGgtLTtcbiAgICAgICAgICAgIHZhciBidWZmZXJlZCA9IG91dC5wb3AoKTtcblxuICAgICAgICAgICAgaWYgKHN1c3BlbmRlZCkge1xuICAgICAgICAgICAgICBzdXNwZW5kZWQgPSBmYWxzZTsgLy8gSWYgcmVuZGVyaW5nIHdhcyBzdXNwZW5kZWQgYXQgdGhpcyBib3VuZGFyeSwgcmVuZGVyIHRoZSBmYWxsYmFja0ZyYW1lXG5cbiAgICAgICAgICAgICAgdmFyIGZhbGxiYWNrRnJhbWUgPSBmcmFtZS5mYWxsYmFja0ZyYW1lO1xuXG4gICAgICAgICAgICAgIGlmICghZmFsbGJhY2tGcmFtZSkge1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKHRydWUgPyBcIlJlYWN0RE9NU2VydmVyIGRpZCBub3QgZmluZCBhbiBpbnRlcm5hbCBmYWxsYmFjayBmcmFtZSBmb3IgU3VzcGVuc2UuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLlwiIDogZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgzMDMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0aGlzLnN0YWNrLnB1c2goZmFsbGJhY2tGcmFtZSk7XG4gICAgICAgICAgICAgIG91dFt0aGlzLnN1c3BlbnNlRGVwdGhdICs9ICc8IS0tJCEtLT4nOyAvLyBTa2lwIGZsdXNoaW5nIG91dHB1dCBzaW5jZSB3ZSdyZSBzd2l0Y2hpbmcgdG8gdGhlIGZhbGxiYWNrXG5cbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBvdXRbdGhpcy5zdXNwZW5zZURlcHRoXSArPSBidWZmZXJlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IC8vIEZsdXNoIG91dHB1dFxuXG5cbiAgICAgICAgICBvdXRbdGhpcy5zdXNwZW5zZURlcHRoXSArPSBmb290ZXI7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2hpbGQgPSBmcmFtZS5jaGlsZHJlbltmcmFtZS5jaGlsZEluZGV4KytdO1xuICAgICAgICB2YXIgb3V0QnVmZmVyID0gJyc7XG5cbiAgICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgICBwdXNoQ3VycmVudERlYnVnU3RhY2sodGhpcy5zdGFjayk7IC8vIFdlJ3JlIHN0YXJ0aW5nIHdvcmsgb24gdGhpcyBmcmFtZSwgc28gcmVzZXQgaXRzIGlubmVyIHN0YWNrLlxuXG4gICAgICAgICAgZnJhbWUuZGVidWdFbGVtZW50U3RhY2subGVuZ3RoID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgb3V0QnVmZmVyICs9IHRoaXMucmVuZGVyKGNoaWxkLCBmcmFtZS5jb250ZXh0LCBmcmFtZS5kb21OYW1lc3BhY2UpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBpZiAoZXJyICE9IG51bGwgJiYgdHlwZW9mIGVyci50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAoZW5hYmxlU3VzcGVuc2VTZXJ2ZXJSZW5kZXJlcikge1xuICAgICAgICAgICAgICBpZiAoISh0aGlzLnN1c3BlbnNlRGVwdGggPiAwKSkge1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKHRydWUgPyBcIkEgUmVhY3QgY29tcG9uZW50IHN1c3BlbmRlZCB3aGlsZSByZW5kZXJpbmcsIGJ1dCBubyBmYWxsYmFjayBVSSB3YXMgc3BlY2lmaWVkLlxcblxcbkFkZCBhIDxTdXNwZW5zZSBmYWxsYmFjaz0uLi4+IGNvbXBvbmVudCBoaWdoZXIgaW4gdGhlIHRyZWUgdG8gcHJvdmlkZSBhIGxvYWRpbmcgaW5kaWNhdG9yIG9yIHBsYWNlaG9sZGVyIHRvIGRpc3BsYXkuXCIgOiBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDM0MikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHN1c3BlbmRlZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoIWZhbHNlKSB7XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IodHJ1ZSA/IFwiUmVhY3RET01TZXJ2ZXIgZG9lcyBub3QgeWV0IHN1cHBvcnQgU3VzcGVuc2UuXCIgOiBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDI5NCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgICAgICBwb3BDdXJyZW50RGVidWdTdGFjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvdXQubGVuZ3RoIDw9IHRoaXMuc3VzcGVuc2VEZXB0aCkge1xuICAgICAgICAgIG91dC5wdXNoKCcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG91dFt0aGlzLnN1c3BlbnNlRGVwdGhdICs9IG91dEJ1ZmZlcjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG91dFswXTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gcHJldkRpc3BhdGNoZXI7XG4gICAgICBzZXRDdXJyZW50VGhyZWFkSUQocHJldlRocmVhZElEKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihjaGlsZCwgY29udGV4dCwgcGFyZW50TmFtZXNwYWNlKSB7XG4gICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGNoaWxkID09PSAnbnVtYmVyJykge1xuICAgICAgdmFyIHRleHQgPSAnJyArIGNoaWxkO1xuXG4gICAgICBpZiAodGV4dCA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5tYWtlU3RhdGljTWFya3VwKSB7XG4gICAgICAgIHJldHVybiBlc2NhcGVUZXh0Rm9yQnJvd3Nlcih0ZXh0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJldmlvdXNXYXNUZXh0Tm9kZSkge1xuICAgICAgICByZXR1cm4gJzwhLS0gLS0+JyArIGVzY2FwZVRleHRGb3JCcm93c2VyKHRleHQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnByZXZpb3VzV2FzVGV4dE5vZGUgPSB0cnVlO1xuICAgICAgcmV0dXJuIGVzY2FwZVRleHRGb3JCcm93c2VyKHRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbmV4dENoaWxkO1xuXG4gICAgICB2YXIgX3Jlc29sdmUgPSByZXNvbHZlKGNoaWxkLCBjb250ZXh0LCB0aGlzLnRocmVhZElEKTtcblxuICAgICAgbmV4dENoaWxkID0gX3Jlc29sdmUuY2hpbGQ7XG4gICAgICBjb250ZXh0ID0gX3Jlc29sdmUuY29udGV4dDtcblxuICAgICAgaWYgKG5leHRDaGlsZCA9PT0gbnVsbCB8fCBuZXh0Q2hpbGQgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH0gZWxzZSBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KG5leHRDaGlsZCkpIHtcbiAgICAgICAgaWYgKG5leHRDaGlsZCAhPSBudWxsICYmIG5leHRDaGlsZC4kJHR5cGVvZiAhPSBudWxsKSB7XG4gICAgICAgICAgLy8gQ2F0Y2ggdW5leHBlY3RlZCBzcGVjaWFsIHR5cGVzIGVhcmx5LlxuICAgICAgICAgIHZhciAkJHR5cGVvZiA9IG5leHRDaGlsZC4kJHR5cGVvZjtcblxuICAgICAgICAgIGlmICghKCQkdHlwZW9mICE9PSBSRUFDVF9QT1JUQUxfVFlQRSkpIHtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoIFwiUG9ydGFscyBhcmUgbm90IGN1cnJlbnRseSBzdXBwb3J0ZWQgYnkgdGhlIHNlcnZlciByZW5kZXJlci4gUmVuZGVyIHRoZW0gY29uZGl0aW9uYWxseSBzbyB0aGF0IHRoZXkgb25seSBhcHBlYXIgb24gdGhlIGNsaWVudCByZW5kZXIuXCIgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IC8vIENhdGNoLWFsbCB0byBwcmV2ZW50IGFuIGluZmluaXRlIGxvb3AgaWYgUmVhY3QuQ2hpbGRyZW4udG9BcnJheSgpIHN1cHBvcnRzIHNvbWUgbmV3IHR5cGUuXG5cblxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoIFwiVW5rbm93biBlbGVtZW50LWxpa2Ugb2JqZWN0IHR5cGU6IFwiICsgJCR0eXBlb2YudG9TdHJpbmcoKSArIFwiLiBUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuXCIgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbmV4dENoaWxkcmVuID0gdG9BcnJheShuZXh0Q2hpbGQpO1xuICAgICAgICB2YXIgZnJhbWUgPSB7XG4gICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICBkb21OYW1lc3BhY2U6IHBhcmVudE5hbWVzcGFjZSxcbiAgICAgICAgICBjaGlsZHJlbjogbmV4dENoaWxkcmVuLFxuICAgICAgICAgIGNoaWxkSW5kZXg6IDAsXG4gICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICBmb290ZXI6ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAge1xuICAgICAgICAgIGZyYW1lLmRlYnVnRWxlbWVudFN0YWNrID0gW107XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0YWNrLnB1c2goZnJhbWUpO1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9IC8vIFNhZmUgYmVjYXVzZSB3ZSBqdXN0IGNoZWNrZWQgaXQncyBhbiBlbGVtZW50LlxuXG5cbiAgICAgIHZhciBuZXh0RWxlbWVudCA9IG5leHRDaGlsZDtcbiAgICAgIHZhciBlbGVtZW50VHlwZSA9IG5leHRFbGVtZW50LnR5cGU7XG5cbiAgICAgIGlmICh0eXBlb2YgZWxlbWVudFR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlckRPTShuZXh0RWxlbWVudCwgY29udGV4dCwgcGFyZW50TmFtZXNwYWNlKTtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChlbGVtZW50VHlwZSkge1xuICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YXIgX25leHRDaGlsZHJlbiA9IHRvQXJyYXkobmV4dENoaWxkLnByb3BzLmNoaWxkcmVuKTtcblxuICAgICAgICAgICAgdmFyIF9mcmFtZSA9IHtcbiAgICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgICAgZG9tTmFtZXNwYWNlOiBwYXJlbnROYW1lc3BhY2UsXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBfbmV4dENoaWxkcmVuLFxuICAgICAgICAgICAgICBjaGlsZEluZGV4OiAwLFxuICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICBmb290ZXI6ICcnXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIF9mcmFtZS5kZWJ1Z0VsZW1lbnRTdGFjayA9IFtdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnN0YWNrLnB1c2goX2ZyYW1lKTtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCBcIlJlYWN0RE9NU2VydmVyIGRvZXMgbm90IHlldCBzdXBwb3J0IFN1c3BlbnNlLlwiICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGVsZW1lbnRUeXBlID09PSAnb2JqZWN0JyAmJiBlbGVtZW50VHlwZSAhPT0gbnVsbCkge1xuICAgICAgICBzd2l0Y2ggKGVsZW1lbnRUeXBlLiQkdHlwZW9mKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IG5leHRDaGlsZDtcblxuICAgICAgICAgICAgICB2YXIgX25leHRDaGlsZHJlbjQ7XG5cbiAgICAgICAgICAgICAgdmFyIGNvbXBvbmVudElkZW50aXR5ID0ge307XG4gICAgICAgICAgICAgIHByZXBhcmVUb1VzZUhvb2tzKGNvbXBvbmVudElkZW50aXR5KTtcbiAgICAgICAgICAgICAgX25leHRDaGlsZHJlbjQgPSBlbGVtZW50VHlwZS5yZW5kZXIoZWxlbWVudC5wcm9wcywgZWxlbWVudC5yZWYpO1xuICAgICAgICAgICAgICBfbmV4dENoaWxkcmVuNCA9IGZpbmlzaEhvb2tzKGVsZW1lbnRUeXBlLnJlbmRlciwgZWxlbWVudC5wcm9wcywgX25leHRDaGlsZHJlbjQsIGVsZW1lbnQucmVmKTtcbiAgICAgICAgICAgICAgX25leHRDaGlsZHJlbjQgPSB0b0FycmF5KF9uZXh0Q2hpbGRyZW40KTtcbiAgICAgICAgICAgICAgdmFyIF9mcmFtZTQgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgICAgICBkb21OYW1lc3BhY2U6IHBhcmVudE5hbWVzcGFjZSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogX25leHRDaGlsZHJlbjQsXG4gICAgICAgICAgICAgICAgY2hpbGRJbmRleDogMCxcbiAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgIGZvb3RlcjogJydcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX2ZyYW1lNC5kZWJ1Z0VsZW1lbnRTdGFjayA9IFtdO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdGhpcy5zdGFjay5wdXNoKF9mcmFtZTQpO1xuICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdmFyIF9lbGVtZW50ID0gbmV4dENoaWxkO1xuICAgICAgICAgICAgICB2YXIgX25leHRDaGlsZHJlbjUgPSBbUmVhY3QuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZS50eXBlLCBfYXNzaWduKHtcbiAgICAgICAgICAgICAgICByZWY6IF9lbGVtZW50LnJlZlxuICAgICAgICAgICAgICB9LCBfZWxlbWVudC5wcm9wcykpXTtcbiAgICAgICAgICAgICAgdmFyIF9mcmFtZTUgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgICAgICBkb21OYW1lc3BhY2U6IHBhcmVudE5hbWVzcGFjZSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogX25leHRDaGlsZHJlbjUsXG4gICAgICAgICAgICAgICAgY2hpbGRJbmRleDogMCxcbiAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgIGZvb3RlcjogJydcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX2ZyYW1lNS5kZWJ1Z0VsZW1lbnRTdGFjayA9IFtdO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdGhpcy5zdGFjay5wdXNoKF9mcmFtZTUpO1xuICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHZhciBwcm92aWRlciA9IG5leHRDaGlsZDtcbiAgICAgICAgICAgICAgdmFyIG5leHRQcm9wcyA9IHByb3ZpZGVyLnByb3BzO1xuXG4gICAgICAgICAgICAgIHZhciBfbmV4dENoaWxkcmVuNiA9IHRvQXJyYXkobmV4dFByb3BzLmNoaWxkcmVuKTtcblxuICAgICAgICAgICAgICB2YXIgX2ZyYW1lNiA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBwcm92aWRlcixcbiAgICAgICAgICAgICAgICBkb21OYW1lc3BhY2U6IHBhcmVudE5hbWVzcGFjZSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogX25leHRDaGlsZHJlbjYsXG4gICAgICAgICAgICAgICAgY2hpbGRJbmRleDogMCxcbiAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgIGZvb3RlcjogJydcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX2ZyYW1lNi5kZWJ1Z0VsZW1lbnRTdGFjayA9IFtdO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdGhpcy5wdXNoUHJvdmlkZXIocHJvdmlkZXIpO1xuICAgICAgICAgICAgICB0aGlzLnN0YWNrLnB1c2goX2ZyYW1lNik7XG4gICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB2YXIgcmVhY3RDb250ZXh0ID0gbmV4dENoaWxkLnR5cGU7IC8vIFRoZSBsb2dpYyBiZWxvdyBmb3IgQ29udGV4dCBkaWZmZXJzIGRlcGVuZGluZyBvbiBQUk9EIG9yIERFViBtb2RlLiBJblxuICAgICAgICAgICAgICAvLyBERVYgbW9kZSwgd2UgY3JlYXRlIGEgc2VwYXJhdGUgb2JqZWN0IGZvciBDb250ZXh0LkNvbnN1bWVyIHRoYXQgYWN0c1xuICAgICAgICAgICAgICAvLyBsaWtlIGEgcHJveHkgdG8gQ29udGV4dC4gVGhpcyBwcm94eSBvYmplY3QgYWRkcyB1bm5lY2Vzc2FyeSBjb2RlIGluIFBST0RcbiAgICAgICAgICAgICAgLy8gc28gd2UgdXNlIHRoZSBvbGQgYmVoYXZpb3VyIChDb250ZXh0LkNvbnN1bWVyIHJlZmVyZW5jZXMgQ29udGV4dCkgdG9cbiAgICAgICAgICAgICAgLy8gcmVkdWNlIHNpemUgYW5kIG92ZXJoZWFkLiBUaGUgc2VwYXJhdGUgb2JqZWN0IHJlZmVyZW5jZXMgY29udGV4dCB2aWFcbiAgICAgICAgICAgICAgLy8gYSBwcm9wZXJ0eSBjYWxsZWQgXCJfY29udGV4dFwiLCB3aGljaCBhbHNvIGdpdmVzIHVzIHRoZSBhYmlsaXR5IHRvIGNoZWNrXG4gICAgICAgICAgICAgIC8vIGluIERFViBtb2RlIGlmIHRoaXMgcHJvcGVydHkgZXhpc3RzIG9yIG5vdCBhbmQgd2FybiBpZiBpdCBkb2VzIG5vdC5cblxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKHJlYWN0Q29udGV4dC5fY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAvLyBUaGlzIG1heSBiZSBiZWNhdXNlIGl0J3MgYSBDb250ZXh0IChyYXRoZXIgdGhhbiBhIENvbnN1bWVyKS5cbiAgICAgICAgICAgICAgICAgIC8vIE9yIGl0IG1heSBiZSBiZWNhdXNlIGl0J3Mgb2xkZXIgUmVhY3Qgd2hlcmUgdGhleSdyZSB0aGUgc2FtZSB0aGluZy5cbiAgICAgICAgICAgICAgICAgIC8vIFdlIG9ubHkgd2FudCB0byB3YXJuIGlmIHdlJ3JlIHN1cmUgaXQncyBhIG5ldyBSZWFjdC5cbiAgICAgICAgICAgICAgICAgIGlmIChyZWFjdENvbnRleHQgIT09IHJlYWN0Q29udGV4dC5Db25zdW1lcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdDb250ZXh0QXNDb25zdW1lcikge1xuICAgICAgICAgICAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdDb250ZXh0QXNDb25zdW1lciA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0PiBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LkNvbnN1bWVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJlYWN0Q29udGV4dCA9IHJlYWN0Q29udGV4dC5fY29udGV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB2YXIgX25leHRQcm9wcyA9IG5leHRDaGlsZC5wcm9wcztcbiAgICAgICAgICAgICAgdmFyIHRocmVhZElEID0gdGhpcy50aHJlYWRJRDtcbiAgICAgICAgICAgICAgdmFsaWRhdGVDb250ZXh0Qm91bmRzKHJlYWN0Q29udGV4dCwgdGhyZWFkSUQpO1xuICAgICAgICAgICAgICB2YXIgbmV4dFZhbHVlID0gcmVhY3RDb250ZXh0W3RocmVhZElEXTtcblxuICAgICAgICAgICAgICB2YXIgX25leHRDaGlsZHJlbjcgPSB0b0FycmF5KF9uZXh0UHJvcHMuY2hpbGRyZW4obmV4dFZhbHVlKSk7XG5cbiAgICAgICAgICAgICAgdmFyIF9mcmFtZTcgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogbmV4dENoaWxkLFxuICAgICAgICAgICAgICAgIGRvbU5hbWVzcGFjZTogcGFyZW50TmFtZXNwYWNlLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBfbmV4dENoaWxkcmVuNyxcbiAgICAgICAgICAgICAgICBjaGlsZEluZGV4OiAwLFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgZm9vdGVyOiAnJ1xuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBfZnJhbWU3LmRlYnVnRWxlbWVudFN0YWNrID0gW107XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0aGlzLnN0YWNrLnB1c2goX2ZyYW1lNyk7XG4gICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUtbm8tZmFsbHRocm91Z2hcblxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRTpcbiAgICAgICAgICAgIHtcblxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoIFwiUmVhY3RET01TZXJ2ZXIgZG9lcyBub3QgeWV0IHN1cHBvcnQgdGhlIGZ1bmRhbWVudGFsIEFQSS5cIiApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZS1uby1mYWxsdGhyb3VnaFxuXG4gICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHZhciBfZWxlbWVudDIgPSBuZXh0Q2hpbGQ7XG4gICAgICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gbmV4dENoaWxkLnR5cGU7IC8vIEF0dGVtcHQgdG8gaW5pdGlhbGl6ZSBsYXp5IGNvbXBvbmVudCByZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhlXG4gICAgICAgICAgICAgIC8vIHN1c3BlbnNlIHNlcnZlci1zaWRlIHJlbmRlcmVyIGlzIGVuYWJsZWQgc28gc3luY2hyb25vdXNseVxuICAgICAgICAgICAgICAvLyByZXNvbHZlZCBjb25zdHJ1Y3RvcnMgYXJlIHN1cHBvcnRlZC5cblxuICAgICAgICAgICAgICBpbml0aWFsaXplTGF6eUNvbXBvbmVudFR5cGUobGF6eUNvbXBvbmVudCk7XG5cbiAgICAgICAgICAgICAgc3dpdGNoIChsYXp5Q29tcG9uZW50Ll9zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFJlc29sdmVkOlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX25leHRDaGlsZHJlbjkgPSBbUmVhY3QuY3JlYXRlRWxlbWVudChsYXp5Q29tcG9uZW50Ll9yZXN1bHQsIF9hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgICAgIHJlZjogX2VsZW1lbnQyLnJlZlxuICAgICAgICAgICAgICAgICAgICB9LCBfZWxlbWVudDIucHJvcHMpKV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBfZnJhbWU5ID0ge1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgZG9tTmFtZXNwYWNlOiBwYXJlbnROYW1lc3BhY2UsXG4gICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IF9uZXh0Q2hpbGRyZW45LFxuICAgICAgICAgICAgICAgICAgICAgIGNoaWxkSW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICBmb290ZXI6ICcnXG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIF9mcmFtZTkuZGVidWdFbGVtZW50U3RhY2sgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhY2sucHVzaChfZnJhbWU5KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2FzZSBSZWplY3RlZDpcbiAgICAgICAgICAgICAgICAgIHRocm93IGxhenlDb21wb25lbnQuX3Jlc3VsdDtcblxuICAgICAgICAgICAgICAgIGNhc2UgUGVuZGluZzpcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoIFwiUmVhY3RET01TZXJ2ZXIgZG9lcyBub3QgeWV0IHN1cHBvcnQgbGF6eS1sb2FkZWQgY29tcG9uZW50cy5cIiApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZS1uby1mYWxsdGhyb3VnaFxuXG4gICAgICAgICAgY2FzZSBSRUFDVF9TQ09QRV9UWVBFOlxuICAgICAgICAgICAge1xuXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvciggXCJSZWFjdERPTVNlcnZlciBkb2VzIG5vdCB5ZXQgc3VwcG9ydCBzY29wZSBjb21wb25lbnRzLlwiICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGluZm8gPSAnJztcblxuICAgICAge1xuICAgICAgICB2YXIgb3duZXIgPSBuZXh0RWxlbWVudC5fb3duZXI7XG5cbiAgICAgICAgaWYgKGVsZW1lbnRUeXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIGVsZW1lbnRUeXBlID09PSAnb2JqZWN0JyAmJiBlbGVtZW50VHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyhlbGVtZW50VHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgXCIgKyAnbmFtZWQgaW1wb3J0cy4nO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG93bmVyTmFtZSA9IG93bmVyID8gZ2V0Q29tcG9uZW50TmFtZShvd25lcikgOiBudWxsO1xuXG4gICAgICAgIGlmIChvd25lck5hbWUpIHtcbiAgICAgICAgICBpbmZvICs9ICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG93bmVyTmFtZSArICdgLic7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAge1xuICAgICAgICB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoIFwiRWxlbWVudCB0eXBlIGlzIGludmFsaWQ6IGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSBjb21wb25lbnRzKSBidXQgZ290OiBcIiArIChlbGVtZW50VHlwZSA9PSBudWxsID8gZWxlbWVudFR5cGUgOiB0eXBlb2YgZWxlbWVudFR5cGUpICsgXCIuXCIgKyBpbmZvICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlckRPTSA9IGZ1bmN0aW9uIHJlbmRlckRPTShlbGVtZW50LCBjb250ZXh0LCBwYXJlbnROYW1lc3BhY2UpIHtcbiAgICB2YXIgdGFnID0gZWxlbWVudC50eXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFyIG5hbWVzcGFjZSA9IHBhcmVudE5hbWVzcGFjZTtcblxuICAgIGlmIChwYXJlbnROYW1lc3BhY2UgPT09IE5hbWVzcGFjZXMuaHRtbCkge1xuICAgICAgbmFtZXNwYWNlID0gZ2V0SW50cmluc2ljTmFtZXNwYWNlKHRhZyk7XG4gICAgfVxuXG4gICAge1xuICAgICAgaWYgKG5hbWVzcGFjZSA9PT0gTmFtZXNwYWNlcy5odG1sKSB7XG4gICAgICAgIC8vIFNob3VsZCB0aGlzIGNoZWNrIGJlIGdhdGVkIGJ5IHBhcmVudCBuYW1lc3BhY2U/IE5vdCBzdXJlIHdlIHdhbnQgdG9cbiAgICAgICAgLy8gYWxsb3cgPFNWRz4gb3IgPG1BVEg+LlxuICAgICAgICBpZiAodGFnICE9PSBlbGVtZW50LnR5cGUpIHtcbiAgICAgICAgICBlcnJvcignPCVzIC8+IGlzIHVzaW5nIGluY29ycmVjdCBjYXNpbmcuICcgKyAnVXNlIFBhc2NhbENhc2UgZm9yIFJlYWN0IGNvbXBvbmVudHMsICcgKyAnb3IgbG93ZXJjYXNlIGZvciBIVE1MIGVsZW1lbnRzLicsIGVsZW1lbnQudHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YWxpZGF0ZURhbmdlcm91c1RhZyh0YWcpO1xuICAgIHZhciBwcm9wcyA9IGVsZW1lbnQucHJvcHM7XG5cbiAgICBpZiAodGFnID09PSAnaW5wdXQnKSB7XG4gICAgICB7XG4gICAgICAgIFJlYWN0Q29udHJvbGxlZFZhbHVlUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCdpbnB1dCcsIHByb3BzKTtcblxuICAgICAgICBpZiAocHJvcHMuY2hlY2tlZCAhPT0gdW5kZWZpbmVkICYmIHByb3BzLmRlZmF1bHRDaGVja2VkICE9PSB1bmRlZmluZWQgJiYgIWRpZFdhcm5EZWZhdWx0Q2hlY2tlZCkge1xuICAgICAgICAgIGVycm9yKCclcyBjb250YWlucyBhbiBpbnB1dCBvZiB0eXBlICVzIHdpdGggYm90aCBjaGVja2VkIGFuZCBkZWZhdWx0Q2hlY2tlZCBwcm9wcy4gJyArICdJbnB1dCBlbGVtZW50cyBtdXN0IGJlIGVpdGhlciBjb250cm9sbGVkIG9yIHVuY29udHJvbGxlZCAnICsgJyhzcGVjaWZ5IGVpdGhlciB0aGUgY2hlY2tlZCBwcm9wLCBvciB0aGUgZGVmYXVsdENoZWNrZWQgcHJvcCwgYnV0IG5vdCAnICsgJ2JvdGgpLiBEZWNpZGUgYmV0d2VlbiB1c2luZyBhIGNvbnRyb2xsZWQgb3IgdW5jb250cm9sbGVkIGlucHV0ICcgKyAnZWxlbWVudCBhbmQgcmVtb3ZlIG9uZSBvZiB0aGVzZSBwcm9wcy4gTW9yZSBpbmZvOiAnICsgJ2h0dHBzOi8vZmIubWUvcmVhY3QtY29udHJvbGxlZC1jb21wb25lbnRzJywgJ0EgY29tcG9uZW50JywgcHJvcHMudHlwZSk7XG5cbiAgICAgICAgICBkaWRXYXJuRGVmYXVsdENoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BzLnZhbHVlICE9PSB1bmRlZmluZWQgJiYgcHJvcHMuZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQgJiYgIWRpZFdhcm5EZWZhdWx0SW5wdXRWYWx1ZSkge1xuICAgICAgICAgIGVycm9yKCclcyBjb250YWlucyBhbiBpbnB1dCBvZiB0eXBlICVzIHdpdGggYm90aCB2YWx1ZSBhbmQgZGVmYXVsdFZhbHVlIHByb3BzLiAnICsgJ0lucHV0IGVsZW1lbnRzIG11c3QgYmUgZWl0aGVyIGNvbnRyb2xsZWQgb3IgdW5jb250cm9sbGVkICcgKyAnKHNwZWNpZnkgZWl0aGVyIHRoZSB2YWx1ZSBwcm9wLCBvciB0aGUgZGVmYXVsdFZhbHVlIHByb3AsIGJ1dCBub3QgJyArICdib3RoKS4gRGVjaWRlIGJldHdlZW4gdXNpbmcgYSBjb250cm9sbGVkIG9yIHVuY29udHJvbGxlZCBpbnB1dCAnICsgJ2VsZW1lbnQgYW5kIHJlbW92ZSBvbmUgb2YgdGhlc2UgcHJvcHMuIE1vcmUgaW5mbzogJyArICdodHRwczovL2ZiLm1lL3JlYWN0LWNvbnRyb2xsZWQtY29tcG9uZW50cycsICdBIGNvbXBvbmVudCcsIHByb3BzLnR5cGUpO1xuXG4gICAgICAgICAgZGlkV2FybkRlZmF1bHRJbnB1dFZhbHVlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwcm9wcyA9IF9hc3NpZ24oe1xuICAgICAgICB0eXBlOiB1bmRlZmluZWRcbiAgICAgIH0sIHByb3BzLCB7XG4gICAgICAgIGRlZmF1bHRDaGVja2VkOiB1bmRlZmluZWQsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICB2YWx1ZTogcHJvcHMudmFsdWUgIT0gbnVsbCA/IHByb3BzLnZhbHVlIDogcHJvcHMuZGVmYXVsdFZhbHVlLFxuICAgICAgICBjaGVja2VkOiBwcm9wcy5jaGVja2VkICE9IG51bGwgPyBwcm9wcy5jaGVja2VkIDogcHJvcHMuZGVmYXVsdENoZWNrZWRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGFnID09PSAndGV4dGFyZWEnKSB7XG4gICAgICB7XG4gICAgICAgIFJlYWN0Q29udHJvbGxlZFZhbHVlUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCd0ZXh0YXJlYScsIHByb3BzKTtcblxuICAgICAgICBpZiAocHJvcHMudmFsdWUgIT09IHVuZGVmaW5lZCAmJiBwcm9wcy5kZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCAmJiAhZGlkV2FybkRlZmF1bHRUZXh0YXJlYVZhbHVlKSB7XG4gICAgICAgICAgZXJyb3IoJ1RleHRhcmVhIGVsZW1lbnRzIG11c3QgYmUgZWl0aGVyIGNvbnRyb2xsZWQgb3IgdW5jb250cm9sbGVkICcgKyAnKHNwZWNpZnkgZWl0aGVyIHRoZSB2YWx1ZSBwcm9wLCBvciB0aGUgZGVmYXVsdFZhbHVlIHByb3AsIGJ1dCBub3QgJyArICdib3RoKS4gRGVjaWRlIGJldHdlZW4gdXNpbmcgYSBjb250cm9sbGVkIG9yIHVuY29udHJvbGxlZCB0ZXh0YXJlYSAnICsgJ2FuZCByZW1vdmUgb25lIG9mIHRoZXNlIHByb3BzLiBNb3JlIGluZm86ICcgKyAnaHR0cHM6Ly9mYi5tZS9yZWFjdC1jb250cm9sbGVkLWNvbXBvbmVudHMnKTtcblxuICAgICAgICAgIGRpZFdhcm5EZWZhdWx0VGV4dGFyZWFWYWx1ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGluaXRpYWxWYWx1ZSA9IHByb3BzLnZhbHVlO1xuXG4gICAgICBpZiAoaW5pdGlhbFZhbHVlID09IG51bGwpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IHByb3BzLmRlZmF1bHRWYWx1ZTsgLy8gVE9ETyAoeXVuZ3N0ZXJzKTogUmVtb3ZlIHN1cHBvcnQgZm9yIGNoaWxkcmVuIGNvbnRlbnQgaW4gPHRleHRhcmVhPi5cblxuICAgICAgICB2YXIgdGV4dGFyZWFDaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuXG4gICAgICAgIGlmICh0ZXh0YXJlYUNoaWxkcmVuICE9IG51bGwpIHtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBlcnJvcignVXNlIHRoZSBgZGVmYXVsdFZhbHVlYCBvciBgdmFsdWVgIHByb3BzIGluc3RlYWQgb2Ygc2V0dGluZyAnICsgJ2NoaWxkcmVuIG9uIDx0ZXh0YXJlYT4uJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCEoZGVmYXVsdFZhbHVlID09IG51bGwpKSB7XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRocm93IEVycm9yKCBcIklmIHlvdSBzdXBwbHkgYGRlZmF1bHRWYWx1ZWAgb24gYSA8dGV4dGFyZWE+LCBkbyBub3QgcGFzcyBjaGlsZHJlbi5cIiApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRleHRhcmVhQ2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBpZiAoISh0ZXh0YXJlYUNoaWxkcmVuLmxlbmd0aCA8PSAxKSkge1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoIFwiPHRleHRhcmVhPiBjYW4gb25seSBoYXZlIGF0IG1vc3Qgb25lIGNoaWxkLlwiICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGV4dGFyZWFDaGlsZHJlbiA9IHRleHRhcmVhQ2hpbGRyZW5bMF07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGVmYXVsdFZhbHVlID0gJycgKyB0ZXh0YXJlYUNoaWxkcmVuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRlZmF1bHRWYWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgZGVmYXVsdFZhbHVlID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBpbml0aWFsVmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHByb3BzID0gX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgICAgY2hpbGRyZW46ICcnICsgaW5pdGlhbFZhbHVlXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRhZyA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgIHtcbiAgICAgICAgUmVhY3RDb250cm9sbGVkVmFsdWVQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoJ3NlbGVjdCcsIHByb3BzKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlUHJvcE5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIHByb3BOYW1lID0gdmFsdWVQcm9wTmFtZXNbaV07XG5cbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShwcm9wc1twcm9wTmFtZV0pO1xuXG4gICAgICAgICAgaWYgKHByb3BzLm11bHRpcGxlICYmICFpc0FycmF5KSB7XG4gICAgICAgICAgICBlcnJvcignVGhlIGAlc2AgcHJvcCBzdXBwbGllZCB0byA8c2VsZWN0PiBtdXN0IGJlIGFuIGFycmF5IGlmICcgKyAnYG11bHRpcGxlYCBpcyB0cnVlLicsIHByb3BOYW1lKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCFwcm9wcy5tdWx0aXBsZSAmJiBpc0FycmF5KSB7XG4gICAgICAgICAgICBlcnJvcignVGhlIGAlc2AgcHJvcCBzdXBwbGllZCB0byA8c2VsZWN0PiBtdXN0IGJlIGEgc2NhbGFyICcgKyAndmFsdWUgaWYgYG11bHRpcGxlYCBpcyBmYWxzZS4nLCBwcm9wTmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BzLnZhbHVlICE9PSB1bmRlZmluZWQgJiYgcHJvcHMuZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQgJiYgIWRpZFdhcm5EZWZhdWx0U2VsZWN0VmFsdWUpIHtcbiAgICAgICAgICBlcnJvcignU2VsZWN0IGVsZW1lbnRzIG11c3QgYmUgZWl0aGVyIGNvbnRyb2xsZWQgb3IgdW5jb250cm9sbGVkICcgKyAnKHNwZWNpZnkgZWl0aGVyIHRoZSB2YWx1ZSBwcm9wLCBvciB0aGUgZGVmYXVsdFZhbHVlIHByb3AsIGJ1dCBub3QgJyArICdib3RoKS4gRGVjaWRlIGJldHdlZW4gdXNpbmcgYSBjb250cm9sbGVkIG9yIHVuY29udHJvbGxlZCBzZWxlY3QgJyArICdlbGVtZW50IGFuZCByZW1vdmUgb25lIG9mIHRoZXNlIHByb3BzLiBNb3JlIGluZm86ICcgKyAnaHR0cHM6Ly9mYi5tZS9yZWFjdC1jb250cm9sbGVkLWNvbXBvbmVudHMnKTtcblxuICAgICAgICAgIGRpZFdhcm5EZWZhdWx0U2VsZWN0VmFsdWUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY3VycmVudFNlbGVjdFZhbHVlID0gcHJvcHMudmFsdWUgIT0gbnVsbCA/IHByb3BzLnZhbHVlIDogcHJvcHMuZGVmYXVsdFZhbHVlO1xuICAgICAgcHJvcHMgPSBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICB2YWx1ZTogdW5kZWZpbmVkXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRhZyA9PT0gJ29wdGlvbicpIHtcbiAgICAgIHZhciBzZWxlY3RlZCA9IG51bGw7XG4gICAgICB2YXIgc2VsZWN0VmFsdWUgPSB0aGlzLmN1cnJlbnRTZWxlY3RWYWx1ZTtcbiAgICAgIHZhciBvcHRpb25DaGlsZHJlbiA9IGZsYXR0ZW5PcHRpb25DaGlsZHJlbihwcm9wcy5jaGlsZHJlbik7XG5cbiAgICAgIGlmIChzZWxlY3RWYWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIHZhciB2YWx1ZTtcblxuICAgICAgICBpZiAocHJvcHMudmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgIHZhbHVlID0gcHJvcHMudmFsdWUgKyAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZSA9IG9wdGlvbkNoaWxkcmVuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZWN0ZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzZWxlY3RWYWx1ZSkpIHtcbiAgICAgICAgICAvLyBtdWx0aXBsZVxuICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc2VsZWN0VmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmICgnJyArIHNlbGVjdFZhbHVlW2pdID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICBzZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxlY3RlZCA9ICcnICsgc2VsZWN0VmFsdWUgPT09IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvcHMgPSBfYXNzaWduKHtcbiAgICAgICAgICBzZWxlY3RlZDogdW5kZWZpbmVkLFxuICAgICAgICAgIGNoaWxkcmVuOiB1bmRlZmluZWRcbiAgICAgICAgfSwgcHJvcHMsIHtcbiAgICAgICAgICBzZWxlY3RlZDogc2VsZWN0ZWQsXG4gICAgICAgICAgY2hpbGRyZW46IG9wdGlvbkNoaWxkcmVuXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHtcbiAgICAgIHZhbGlkYXRlUHJvcGVydGllc0luRGV2ZWxvcG1lbnQodGFnLCBwcm9wcyk7XG4gICAgfVxuXG4gICAgYXNzZXJ0VmFsaWRQcm9wcyh0YWcsIHByb3BzKTtcbiAgICB2YXIgb3V0ID0gY3JlYXRlT3BlblRhZ01hcmt1cChlbGVtZW50LnR5cGUsIHRhZywgcHJvcHMsIG5hbWVzcGFjZSwgdGhpcy5tYWtlU3RhdGljTWFya3VwLCB0aGlzLnN0YWNrLmxlbmd0aCA9PT0gMSk7XG4gICAgdmFyIGZvb3RlciA9ICcnO1xuXG4gICAgaWYgKG9taXR0ZWRDbG9zZVRhZ3MuaGFzT3duUHJvcGVydHkodGFnKSkge1xuICAgICAgb3V0ICs9ICcvPic7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dCArPSAnPic7XG4gICAgICBmb290ZXIgPSAnPC8nICsgZWxlbWVudC50eXBlICsgJz4nO1xuICAgIH1cblxuICAgIHZhciBjaGlsZHJlbjtcbiAgICB2YXIgaW5uZXJNYXJrdXAgPSBnZXROb25DaGlsZHJlbklubmVyTWFya3VwKHByb3BzKTtcblxuICAgIGlmIChpbm5lck1hcmt1cCAhPSBudWxsKSB7XG4gICAgICBjaGlsZHJlbiA9IFtdO1xuXG4gICAgICBpZiAobmV3bGluZUVhdGluZ1RhZ3MuaGFzT3duUHJvcGVydHkodGFnKSAmJiBpbm5lck1hcmt1cC5jaGFyQXQoMCkgPT09ICdcXG4nKSB7XG4gICAgICAgIC8vIHRleHQvaHRtbCBpZ25vcmVzIHRoZSBmaXJzdCBjaGFyYWN0ZXIgaW4gdGhlc2UgdGFncyBpZiBpdCdzIGEgbmV3bGluZVxuICAgICAgICAvLyBQcmVmZXIgdG8gYnJlYWsgYXBwbGljYXRpb24veG1sIG92ZXIgdGV4dC9odG1sIChmb3Igbm93KSBieSBhZGRpbmdcbiAgICAgICAgLy8gYSBuZXdsaW5lIHNwZWNpZmljYWxseSB0byBnZXQgZWF0ZW4gYnkgdGhlIHBhcnNlci4gKEFsdGVybmF0ZWx5IGZvclxuICAgICAgICAvLyB0ZXh0YXJlYXMsIHJlcGxhY2luZyBcIl5cXG5cIiB3aXRoIFwiXFxyXFxuXCIgZG9lc24ndCBnZXQgZWF0ZW4sIGFuZCB0aGUgZmlyc3RcbiAgICAgICAgLy8gXFxyIGlzIG5vcm1hbGl6ZWQgb3V0IGJ5IEhUTUxUZXh0QXJlYUVsZW1lbnQjdmFsdWUuKVxuICAgICAgICAvLyBTZWU6IDxodHRwOi8vd3d3LnczLm9yZy9UUi9odG1sLXBvbHlnbG90LyNuZXdsaW5lcy1pbi10ZXh0YXJlYS1hbmQtcHJlPlxuICAgICAgICAvLyBTZWU6IDxodHRwOi8vd3d3LnczLm9yZy9UUi9odG1sNS9zeW50YXguaHRtbCNlbGVtZW50LXJlc3RyaWN0aW9ucz5cbiAgICAgICAgLy8gU2VlOiA8aHR0cDovL3d3dy53My5vcmcvVFIvaHRtbDUvc3ludGF4Lmh0bWwjbmV3bGluZXM+XG4gICAgICAgIC8vIFNlZTogUGFyc2luZyBvZiBcInRleHRhcmVhXCIgXCJsaXN0aW5nXCIgYW5kIFwicHJlXCIgZWxlbWVudHNcbiAgICAgICAgLy8gIGZyb20gPGh0dHA6Ly93d3cudzMub3JnL1RSL2h0bWw1L3N5bnRheC5odG1sI3BhcnNpbmctbWFpbi1pbmJvZHk+XG4gICAgICAgIG91dCArPSAnXFxuJztcbiAgICAgIH1cblxuICAgICAgb3V0ICs9IGlubmVyTWFya3VwO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZHJlbiA9IHRvQXJyYXkocHJvcHMuY2hpbGRyZW4pO1xuICAgIH1cblxuICAgIHZhciBmcmFtZSA9IHtcbiAgICAgIGRvbU5hbWVzcGFjZTogZ2V0Q2hpbGROYW1lc3BhY2UocGFyZW50TmFtZXNwYWNlLCBlbGVtZW50LnR5cGUpLFxuICAgICAgdHlwZTogdGFnLFxuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgICAgY2hpbGRJbmRleDogMCxcbiAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICBmb290ZXI6IGZvb3RlclxuICAgIH07XG5cbiAgICB7XG4gICAgICBmcmFtZS5kZWJ1Z0VsZW1lbnRTdGFjayA9IFtdO1xuICAgIH1cblxuICAgIHRoaXMuc3RhY2sucHVzaChmcmFtZSk7XG4gICAgdGhpcy5wcmV2aW91c1dhc1RleHROb2RlID0gZmFsc2U7XG4gICAgcmV0dXJuIG91dDtcbiAgfTtcblxuICByZXR1cm4gUmVhY3RET01TZXJ2ZXJSZW5kZXJlcjtcbn0oKTtcblxuLyoqXG4gKiBSZW5kZXIgYSBSZWFjdEVsZW1lbnQgdG8gaXRzIGluaXRpYWwgSFRNTC4gVGhpcyBzaG91bGQgb25seSBiZSB1c2VkIG9uIHRoZVxuICogc2VydmVyLlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1kb20tc2VydmVyLmh0bWwjcmVuZGVydG9zdHJpbmdcbiAqL1xuXG5mdW5jdGlvbiByZW5kZXJUb1N0cmluZyhlbGVtZW50KSB7XG4gIHZhciByZW5kZXJlciA9IG5ldyBSZWFjdERPTVNlcnZlclJlbmRlcmVyKGVsZW1lbnQsIGZhbHNlKTtcblxuICB0cnkge1xuICAgIHZhciBtYXJrdXAgPSByZW5kZXJlci5yZWFkKEluZmluaXR5KTtcbiAgICByZXR1cm4gbWFya3VwO1xuICB9IGZpbmFsbHkge1xuICAgIHJlbmRlcmVyLmRlc3Ryb3koKTtcbiAgfVxufVxuLyoqXG4gKiBTaW1pbGFyIHRvIHJlbmRlclRvU3RyaW5nLCBleGNlcHQgdGhpcyBkb2Vzbid0IGNyZWF0ZSBleHRyYSBET00gYXR0cmlidXRlc1xuICogc3VjaCBhcyBkYXRhLXJlYWN0LWlkIHRoYXQgUmVhY3QgdXNlcyBpbnRlcm5hbGx5LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1kb20tc2VydmVyLmh0bWwjcmVuZGVydG9zdGF0aWNtYXJrdXBcbiAqL1xuXG5mdW5jdGlvbiByZW5kZXJUb1N0YXRpY01hcmt1cChlbGVtZW50KSB7XG4gIHZhciByZW5kZXJlciA9IG5ldyBSZWFjdERPTVNlcnZlclJlbmRlcmVyKGVsZW1lbnQsIHRydWUpO1xuXG4gIHRyeSB7XG4gICAgdmFyIG1hcmt1cCA9IHJlbmRlcmVyLnJlYWQoSW5maW5pdHkpO1xuICAgIHJldHVybiBtYXJrdXA7XG4gIH0gZmluYWxseSB7XG4gICAgcmVuZGVyZXIuZGVzdHJveSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRvTm9kZVN0cmVhbSgpIHtcbiAge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIlJlYWN0RE9NU2VydmVyLnJlbmRlclRvTm9kZVN0cmVhbSgpOiBUaGUgc3RyZWFtaW5nIEFQSSBpcyBub3QgYXZhaWxhYmxlIGluIHRoZSBicm93c2VyLiBVc2UgUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdHJpbmcoKSBpbnN0ZWFkLlwiICk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRvU3RhdGljTm9kZVN0cmVhbSgpIHtcbiAge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIlJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RhdGljTm9kZVN0cmVhbSgpOiBUaGUgc3RyZWFtaW5nIEFQSSBpcyBub3QgYXZhaWxhYmxlIGluIHRoZSBicm93c2VyLiBVc2UgUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdGF0aWNNYXJrdXAoKSBpbnN0ZWFkLlwiICk7XG4gICAgfVxuICB9XG59IC8vIE5vdGU6IHdoZW4gY2hhbmdpbmcgdGhpcywgYWxzbyBjb25zaWRlciBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzExNTI2XG5cblxudmFyIFJlYWN0RE9NU2VydmVyID0ge1xuICByZW5kZXJUb1N0cmluZzogcmVuZGVyVG9TdHJpbmcsXG4gIHJlbmRlclRvU3RhdGljTWFya3VwOiByZW5kZXJUb1N0YXRpY01hcmt1cCxcbiAgcmVuZGVyVG9Ob2RlU3RyZWFtOiByZW5kZXJUb05vZGVTdHJlYW0sXG4gIHJlbmRlclRvU3RhdGljTm9kZVN0cmVhbTogcmVuZGVyVG9TdGF0aWNOb2RlU3RyZWFtLFxuICB2ZXJzaW9uOiBSZWFjdFZlcnNpb25cbn07XG5cbi8vIFRPRE86IGRlY2lkZSBvbiB0aGUgdG9wLWxldmVsIGV4cG9ydCBmb3JtLlxuLy8gVGhpcyBpcyBoYWNreSBidXQgbWFrZXMgaXQgd29yayB3aXRoIGJvdGggUm9sbHVwIGFuZCBKZXN0XG5cblxudmFyIHNlcnZlcl9icm93c2VyID0gUmVhY3RET01TZXJ2ZXIuZGVmYXVsdCB8fCBSZWFjdERPTVNlcnZlcjtcblxubW9kdWxlLmV4cG9ydHMgPSBzZXJ2ZXJfYnJvd3NlcjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1kb20tc2VydmVyLmJyb3dzZXIucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtZG9tLXNlcnZlci5icm93c2VyLmRldmVsb3BtZW50LmpzJyk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9