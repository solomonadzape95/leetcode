function topKFrequent(nums: number[], k: number): number[] {
    const frequencyMap = new Map<number, number>(); 

    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    const sortedFrequencies = Array.from(frequencyMap.entries()).sort(
        ([, freqA], [, freqB]) => freqB - freqA     );

    return sortedFrequencies.slice(0, k).map(([num]) => num);

}
