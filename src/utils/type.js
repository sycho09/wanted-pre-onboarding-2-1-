class AdStatus {
  constructor({
    adType,
    title,
    status,
    startDate,
    budget,
    report: { roas, convValue, cost },
    endDate
  }) {
    this.adType = this.#addPrefix(adType);
    this.title = title;
    this.status = status === 'active' ? '진행중' : '중단됨';
    this.startDate = startDate.slice(0, 10);
    this.budget = this.#addUnit(budget);
    this.roas = `${roas}%`;
    this.convValue = this.#addUnit(convValue);
    this.cost = this.#addUnit(cost);
    this.endDate = endDate;
  }

  #addPrefix(adType) {
    return adType === 'web' ? '웹광고' : '앱광고';
  }

  #addUnit(cost) {
    if (cost > 99999) {
      const [big, small] = (cost / 10000).toFixed(1).split('.');
      return Number(small) !== 0
        ? `${Number(big).toLocaleString()}만 ${small}천원`
        : `${Number(big).toLocaleString()}만원`;
    }
    return Math.floor(cost / 1000) + '천원';
  }
}

export default AdStatus;
